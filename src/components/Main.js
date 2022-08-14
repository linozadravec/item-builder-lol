import React from 'react'
import ItemCompleted from './ItemCompleted'
import ItemComponent from './ItemComponent'
import SelectedComponents from './SelectedComponents'
import {nanoid} from "nanoid"

import '../css/main.css'
import Countdown from 'react-countdown'

import itemsCompletedData from '../CompleteItemsData.js'
import itemComponentsData from "../ComponentItemsData"


export default function Main(){
    let emptyObjString = JSON.stringify({"name":"Empty","id":0})

    const [gameStarted, setGameStarted] = React.useState(false)
    const [completedItem, setcompletedItem] = React.useState(emptyObjString)
    const [itemComponents, setItemComponents] = React.useState([emptyObjString])
    const [selectedAnswers, setSelectedAnswers] = React.useState([])
    const [points, setPoints] = React.useState(0)
    const [pointsRecord, setPointsRecord] = React.useState(localStorage.getItem("recordPoints"))
    const [mistakes, setMistakes] = React.useState(0)
    const [endGameTime, setEndGameTime] = React.useState()
    const [normalMode, setNormalMode] = React.useState(false)
    const [previousItem, setPreviousItem] = React.useState([])

    

    React.useEffect(()=>{
        
        if(JSON.parse(completedItem).recipe !== undefined && JSON.parse(completedItem).recipe.length === selectedAnswers.length){

            setPreviousItem(()=>{
                const item =[]
                item.push(completedItem)
                for(let i=0;i<JSON.parse(completedItem).recipe.length;i++){
                    const recipeItemName = JSON.parse(completedItem).recipe[i]
                    const recipeItem = itemComponentsData.itemList.filter((item)=> item.name===recipeItemName)[0]
                    item.push(recipeItem)
                }
                return item
            })

            const containsAll = JSON.parse(completedItem).recipe.every(element => {
                return selectedAnswers.includes(element);
              });
              if(containsAll){
                setPoints((prevPoints) => prevPoints+1)
                setSelectedAnswers([])
                generateQuestion()
              }
              else{
                setMistakes((prevMistakes) => prevMistakes+1)
                setSelectedAnswers([])
                generateQuestion()
              }
        }
    },[selectedAnswers])

    React.useEffect(()=>{
        if(localStorage.getItem("recordPoints")===null){
            localStorage.setItem("recordPoints", 0)
        }
    })


    React.useEffect(()=>{
        if(normalMode && points >  parseInt(localStorage.getItem("recordPoints"))){
            localStorage.setItem("recordPoints", points)
            setPointsRecord(localStorage.getItem("recordPoints"))
        }
    },[points])

    React.useEffect(()=>{
        if(mistakes > 2 && normalMode){
            setGameStarted(false)
        }
    },[mistakes])

    function generateQuestion(){
        const generatedCompletedItem = itemsCompletedData.itemList[Math.floor(Math.random() * itemsCompletedData.itemList.length)]
        setcompletedItem(JSON.stringify(generatedCompletedItem))

        const recipe = generatedCompletedItem.recipe
        setItemComponents(() =>{
            const arrayComponents = []
            
            //Izvrsava se 2 put 
            // Possible promijeniti da itemi ne budu duplikati
            for(let i=0;i<6;i++){ //broj komponenti u odgovoru je iMax
                arrayComponents.push(itemComponentsData.itemList[Math.floor(Math.random() * itemComponentsData.itemList.length)])
            }

            const uniqueNumbers=generateUniqueNumbers(recipe.length)

            for(let i=0;i<recipe.length;i++){ 
                arrayComponents[uniqueNumbers[i]] = itemComponentsData.itemList.filter((item)=> item.name===recipe[i])[0] //broj komponenti u odgovoru je '*6'
            }
            return arrayComponents
        })
    }

    function generateUniqueNumbers(n){
        var arr = [];
        while(arr.length < n){
            var r = Math.floor(Math.random() * 6); //broj komponenti
            if(arr.indexOf(r) === -1) arr.push(r);
        }
        return arr
    }

    function startGame(){
        generateQuestion()
        setSelectedAnswers([])
        setMistakes(0)
        setPoints(0)
        setEndGameTime(Date.now() + 60000)
        setGameStarted(true)
    }

    function selectAnswer(componentName){
        setSelectedAnswers((prevAnswers)=> [...prevAnswers, componentName])      
    }

    function removeAnswer(componentName){
        setSelectedAnswers((prevAnswers)=>{
            return prevAnswers.filter((answer)=> answer !== componentName)
        })
    }

    function changeCheckbox(){
        var checkBox = document.getElementById("modeCheckBox");
        setNormalMode(checkBox.checked)
    }

    //selectedcomponents saved as only name not object
    const selectedComponentElements= selectedAnswers.map((answer) => {
        return <SelectedComponents
            key = {nanoid()}
            selected = {answer}
            handleRemove = {() => removeAnswer(answer)}
            url = {itemComponentsData.itemList.filter(function(item){return item.name === answer; })[0].url}
        />
})

    const itemComponentElements = itemComponents.map(item => (
        <ItemComponent 
            key= {nanoid()}
            name = {item.name}
            id = {item.id}
            url = {item.url}
            selectAnswer = {()=>selectAnswer(item.name)}
        />
    ))

    return (
        <main> 
                <div className='toplayer'>
                    <div className="main--back">
                        {gameStarted && !normalMode && <button onClick={()=>setGameStarted(false)}>Go back</button>}
                    </div>
                    <div>
                        <h3>LoL Item builder</h3>
                    </div>
                    <div>
                        <h3></h3>
                    </div>
                </div>
                
                {gameStarted ? 
                ""
                :
                <div>
                    <p className="main--textCenter">Select mode:</p>
                    <div className="main--toggleSwitch">
                        <p>Learning</p>
                        <label className="switch">
                        <input type="checkbox" id="modeCheckBox" checked={normalMode} onChange={changeCheckbox}/>
                        <span className="slider round"></span>
                        </label>
                        <p>Normal</p>
                    </div>
                </div>
                }
                
                
                {
                    gameStarted 
                    ?
                    <React.Fragment>
                        <div>
                            <div className="main--question">
                                {normalMode && <Countdown 
                                date={endGameTime}
                                onComplete={()=>setGameStarted(false)}
                                />}
                                <div>
                                <ItemCompleted 
                                    completedItem = {completedItem}
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
                        
                            {previousItem.length !== 0 && !normalMode?

                            <div className="main--previousQuestion">
                                <h4>Previous answer: </h4>    
                                <img height="50px" width="50px" src={JSON.parse(previousItem[0]).url} alt="Missing"></img>
                                <div>
                                    <img height="50px" width="50px" src={previousItem[1].url} alt="Missing"></img>
                                    <img height="50px" width="50px" src={previousItem[2].url} alt="Missing"></img>
                                    {previousItem.length === 4 && <img height="50px" width="50px" src={previousItem[3].url} alt="Missing"></img>}
                                </div>
                            </div>
                            
                            : 
                            ""
                            }     
                        
                    </React.Fragment>
                    :
                    <div className="main--start">
                        {mistakes > 2 ? <h1>Game over</h1> : ""}
                        <button className="main--startBtn" onClick={startGame}>{mistakes > 2 ? "Res" : "S"}tart Game</button>
                        
                    </div>
                }
                <div>
                    <h3>{points} points / {mistakes} mistakes</h3>
                    {normalMode && <h4 className='main--textCenter'>Record: {pointsRecord ? pointsRecord : 0}</h4>}
                </div>
        </main>    
    )
    
}