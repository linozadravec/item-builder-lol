import React from 'react'
import ItemCompleted from './ItemCompleted'
import ItemComponent from './ItemComponent'
import SelectedComponents from './SelectedComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faVolumeMute, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { nanoid } from "nanoid"
import successAudio from "../media/sounds/success.mp3"
import mistakeAudio from "../media/sounds/mistake.mp3"

import '../css/main.css'
import Countdown from 'react-countdown'

import itemsCompletedData from '../CompleteItemsData.js'
import itemComponentsData from "../ComponentItemsData"


export default function Main() {
    let emptyObjString = { "name": "Empty", "id": 0 }

    const [gameStarted, setGameStarted] = React.useState(false)
    const [completedItem, setcompletedItem] = React.useState(emptyObjString)
    const [completedItemHistory, setCompletedItemHistory] = React.useState([])
    const [itemComponents, setItemComponents] = React.useState([emptyObjString])
    const [selectedAnswers, setSelectedAnswers] = React.useState([])
    const [points, setPoints] = React.useState(0)
    const [pointsRecord, setPointsRecord] = React.useState(localStorage.getItem("recordPoints"))
    const [mistakes, setMistakes] = React.useState(0)
    const [endGameTime, setEndGameTime] = React.useState()
    const [normalMode, setNormalMode] = React.useState(false)
    const [previousItem, setPreviousItem] = React.useState([])
    const [volume, setVolume] = React.useState(true)



    React.useEffect(() => {

        if (completedItem.recipe !== undefined && completedItem.recipe.length === selectedAnswers.length) {

            setPreviousItem(() => {
                const item = []
                item.push(completedItem)
                for (let i = 0; i < completedItem.recipe.length; i++) {
                    const recipeItemName = completedItem.recipe[i]
                    const recipeItem = itemComponentsData.itemList.filter((item) => item.name === recipeItemName)[0]
                    item.push(recipeItem)
                }
                return item
            })

            const containsAll = completedItem.recipe.every(element => {
                return selectedAnswers.includes(element);
            });
            if (containsAll) {
                setPoints((prevPoints) => prevPoints + 1)
                setSelectedAnswers([])
                generateQuestion()
                setEndGameTime(prevTime => prevTime + 1000)
                if (volume) {
                    playSound(successAudio)
                }

            }
            else {
                setMistakes((prevMistakes) => prevMistakes + 1)
                setSelectedAnswers([])
                generateQuestion()
                if (volume) {
                    playSound(mistakeAudio)
                }

            }
        }
    }, [selectedAnswers])

    React.useEffect(() => {
        if (localStorage.getItem("recordPoints") === null) {
            localStorage.setItem("recordPoints", 0)
        }
    })


    React.useEffect(() => {
        if (normalMode && points > parseInt(localStorage.getItem("recordPoints"))) {
            localStorage.setItem("recordPoints", points)
            setPointsRecord(localStorage.getItem("recordPoints"))
        }
    }, [points])

    React.useEffect(() => {
        if (mistakes > 2 && normalMode) {
            setGameStarted(false)
        }
    }, [mistakes])

    function generateQuestion() {
            
        const filteredItemsCompletedData = itemsCompletedData.itemList.filter(item => !completedItemHistory.includes(item))
        const generatedCompletedItem = filteredItemsCompletedData[Math.floor(Math.random() * filteredItemsCompletedData.length)]
        setcompletedItem(generatedCompletedItem)

        if(completedItemHistory.length < 20){
            setCompletedItemHistory(prevHistory => [...prevHistory, generatedCompletedItem])
        }
        else{
            setCompletedItemHistory(prevHistory => [...prevHistory.slice(1), generatedCompletedItem])
        }

        const recipe = generatedCompletedItem.recipe
        setItemComponents(() => {
            const arrayComponents = []
            let filteredItemComponentsData= []
            //Runs 2 times?
            if(recipe.length === 2){
                filteredItemComponentsData = itemComponentsData.itemList.filter((item) => !(item.name === recipe[0] || item.name === recipe[1]))
            }
            else{
                filteredItemComponentsData = itemComponentsData.itemList.filter((item) => !(item.name === recipe[0] || item.name === recipe[1] || item.name === recipe[2] ))
            }
            
            let uniqueNumbers = generateUniqueNumbers(6, filteredItemComponentsData.length)

            for (let i = 0; i < 6; i++) { 
                arrayComponents.push(filteredItemComponentsData[uniqueNumbers[i]])
            }

            uniqueNumbers = generateUniqueNumbers(recipe.length, 6)

            for (let i = 0; i < recipe.length; i++) {
                let recipeItem = itemComponentsData.itemList.filter((item) => item.name === recipe[i])[0]
                arrayComponents[uniqueNumbers[i]] = recipeItem
            }
            return arrayComponents
        })
    }

    function generateUniqueNumbers(amount, maxNum) {
        var arr = [];
        while (arr.length < amount) {
            var r = Math.floor(Math.random() * maxNum);
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        return arr
    }

    function startGame() {
        generateQuestion()
        setSelectedAnswers([])
        setMistakes(0)
        setPoints(0)
        setEndGameTime(Date.now() + 45000)
        setGameStarted(true)
    }

    function selectAnswer(componentName) {
        setSelectedAnswers((prevAnswers) => [...prevAnswers, componentName])
    }

    function removeAnswer(componentName) {
        const itemIndex = selectedAnswers.findIndex(item => item === componentName); //Otherwise removes both same-named items
        setSelectedAnswers((prevAnswers) => {
            return prevAnswers.filter((answer, index) => index !== itemIndex)
        })
    }

    function changeCheckbox() {
        var checkBox = document.getElementById("modeCheckBox");
        setNormalMode(checkBox.checked)
    }

    function changeVolume() {
        setVolume(prevVolume => !prevVolume)
    }

    //selectedcomponents saved as only name not object
    const selectedComponentElements = selectedAnswers.map((answer) => {
        return <SelectedComponents
            key={nanoid()}
            selected={answer}
            handleRemove={() => removeAnswer(answer)}
            url={itemComponentsData.itemList.filter(function (item) { return item.name === answer; })[0].url}
        />
    })

    const itemComponentElements = itemComponents.map(item => (
        <ItemComponent
            key={nanoid()}
            name={item.name}
            id={item.id}
            url={item.url}
            selectAnswer={() => selectAnswer(item.name)}
        />
    ))

    function playSound(source) {
        var audio = new Audio();
        audio.src = source
        audio.volume = 0.2
        audio.load()
        const promise = audio.play()
        if (promise !== undefined) {
            promise.then(() => {
            })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    return (
        <main>
            <div className='main--top'>

                {gameStarted && !normalMode && <FontAwesomeIcon className="top--backIcon" icon={faArrowLeft} color="#D9C241" size="2x" onClick={() => setGameStarted(false)} />}

                <h3 className="main--title LoLColor">LoL Item builder</h3>

                {volume ?
                    <FontAwesomeIcon className="main--icon" icon={faVolumeHigh} color="#D9C241" size="2x" onClick={changeVolume} />
                    :
                    <FontAwesomeIcon className="main--icon" icon={faVolumeMute} color="#D9C241" size="2x" onClick={changeVolume} />
                }
            </div>

            {gameStarted ?
                ""
                :
                <div>
                    <p className="main--selectMode LoLColor">Select mode:</p>
                    <div className="main--toggleSwitch">
                        <p className="main--mode LoLColor">&nbsp;&nbsp;Learn&nbsp;</p>
                        <label className="switch">
                            <input type="checkbox" id="modeCheckBox" checked={normalMode} onChange={changeCheckbox} />
                            <span className="slider round"></span>
                        </label>
                        <p className="main--mode LoLColor">&nbsp;Normal</p>
                    </div>
                </div>
            }


            {
                gameStarted
                    ?
                    <React.Fragment>
                        <div>
                            <div className="main--question LoLColor">
                                {normalMode && <Countdown
                                    className="question--countDown"
                                    date={endGameTime}
                                    onComplete={() => setGameStarted(false)}
                                    renderer={({ seconds, minutes }) => (<h2>{minutes * 60 + seconds}</h2>)}
                                />}
                                <div className="question--completedItem">
                                    <ItemCompleted
                                        completedItem={completedItem}
                                    />
                                </div>
                                <div className="question--selected">
                                    {selectedComponentElements}
                                </div>
                            </div>
                        </div>
                        <div className="main--answers">
                            {itemComponentElements}
                        </div>



                    </React.Fragment>
                    :
                    <div className="main--start">
                        {mistakes > 2 ? <h1 className="main--gameOver LoLColor">Game Over</h1> : ""}
                        <button className="main--startBtn " onClick={startGame}>{mistakes > 2 ? "Res" : "S"}tart Game</button>
                    </div>
            }
            <div className="main--bottom">
                {previousItem.length !== 0 && !normalMode && gameStarted ?

                    <div className="main--previousQuestion">
                        <h4 className="main--previousAnswer">Previous answer: </h4>
                        <img className="main--itemPreviousQuestion" height="50px" width="50px" src={previousItem[0].url} alt="Missing"></img>
                        <div>
                            <img className="main--itemPreviousAnswer" height="50px" width="50px" src={previousItem[1].url} alt="Missing"></img>
                            <img className="main--itemPreviousAnswer" height="50px" width="50px" src={previousItem[2].url} alt="Missing"></img>
                            {previousItem.length === 4 && <img className="main--itemPreviousAnswer" height="50px" width="50px" src={previousItem[3].url} alt="Missing"></img>}
                        </div>
                    </div>
                    :
                    ""
                }

                <h3 className="bottom--pointsMistakes LoLColor"> &nbsp;&nbsp;&nbsp;{points} points / {mistakes} mistakes</h3>
                {normalMode && <h4 className='bottom--record LoLColor'>Record: {pointsRecord ? pointsRecord : 0}</h4>}
            </div>
        </main>
    )

}