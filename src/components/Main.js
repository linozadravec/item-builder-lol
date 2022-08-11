import React from 'react'
import ItemCompleted from './ItemCompleted'
import ItemComponent from './ItemComponent'
import SelectedComponents from './SelectedComponents'
import {nanoid} from "nanoid"
import '../css/main.css'

import itemsCompletedData from '../CompleteItemsData.js'
import itemComponentsData from "../ComponentItemsData"


export default function Main(){
    let emptyObjString = JSON.stringify({"name":"Empty","id":0})

    const [gameStarted, setGameStarted] = React.useState(false)
    const [completedItem, setcompletedItem] = React.useState(emptyObjString)
    const [itemComponents, setItemComponents] = React.useState([emptyObjString])
    const [selectedAnswers, setSelectedAnswers] = React.useState([])
    const [points, setPoints] = React.useState(0)
    const [mistakes, setMistakes] = React.useState(0)

    React.useEffect(()=>{
        
        if(JSON.parse(completedItem).recipe !== undefined && JSON.parse(completedItem).recipe.length === selectedAnswers.length){

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
        if(mistakes > 2){
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
        setMistakes(0)
        setPoints(0)
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

    
    //dont know how to avoid ternary, dont know what to initialize it to (const selectedComponentElements = [{}]?)
    const selectedComponentElements = selectedAnswers.length !== 0 ? selectedAnswers.map((answer) => {
            return <SelectedComponents
                key = {nanoid()}
                selected = {answer}
                handleRemove = {() => removeAnswer(answer)}
            />
    })
    :
    undefined


    const itemComponentElements = itemComponents.map(item => (
        <ItemComponent 
            key= {nanoid()}
            name = {item.name}
            id = {item.id}
            selectAnswer = {()=>selectAnswer(item.name)}
        />
    ))
    return (
        <main>
                <h3>Item builder - {points} points / {mistakes} mistakes</h3> 

                {
                    gameStarted 
                    ?
                    <React.Fragment>
                        <div>
                            <div className="main--question">
                                <ItemCompleted 
                                completedItem = {completedItem}
                                />
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
                    <div>
                        {mistakes > 2 ? <h1>Game over</h1> : ""}
                        <button onClick={startGame}>{mistakes > 2 ? "Res" : "S"}tart Game</button>
                    </div>
                    
                }
            
        </main>
        
    )
    
}