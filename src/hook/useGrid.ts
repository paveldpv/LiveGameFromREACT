import  React  from 'react';
import { cell } from './../interface/interface';
import {useState,useEffect,useRef,useCallback}from 'react';
import {defaultGrid1,defaultGrid2,defaultGrid3,defaultGrid4}from './../default-state-cell/default-state-cell';
import { getNeighbors } from '../function/getNeighbors';

export const useGrid=()=>{
   const [grid,setGrid]=useState(defaultGrid1);
   const [generation,setGeneration]=useState(0);
   const [clicable,setClicable]=useState(true);
   const [speed,setSpeed]=useState('')//?0?
   const [gridSize,setGridSize]=useState(15)

   const createRandomGrid= useCallback((num:number)=>{
      
      const numberCellofGrid:number= num*num;
      let randomGrid:any=[]

      for (let i = 0; i <numberCellofGrid ; i++) {
         randomGrid = [...randomGrid, { alive: Math.round(Math.random()), id: i }];
      }
      console.log(randomGrid);
      
      setGeneration(0);
      setGrid(randomGrid)
   },[])

   const nextStepAuto=()=>{
      console.log(`function`);
      let validGrid:boolean=false
     
      let nextGeneration:[cell]|any = grid.map((cell,i)=>{
         let counterLivingNeighbors:number=0

         let neighbors = getNeighbors(i,gridSize,gridSize)
        
         if(grid[neighbors.northWest].alive){
            counterLivingNeighbors++
         }
         if(grid[neighbors.north].alive){
            counterLivingNeighbors++
         }
         if(grid[neighbors.northEast].alive){
            counterLivingNeighbors++
         }
         if(grid[neighbors.west].alive){
            counterLivingNeighbors++
         }
         if(grid[neighbors.east].alive){
            counterLivingNeighbors++
         }
         if(grid[neighbors.southWest].alive){
            counterLivingNeighbors++
         }
         if(grid[neighbors.south].alive){
            counterLivingNeighbors++
         }
         if(grid[neighbors.southEast].alive){
            counterLivingNeighbors++
         }

         //rules
         if(cell.alive&&(counterLivingNeighbors==2||counterLivingNeighbors==3)){
            return cell
         }
         if(cell.alive&&(counterLivingNeighbors<=2||counterLivingNeighbors>=4)){
            validGrid= true
            return{...cell,alive:false}
         }
         if(!cell.alive&&counterLivingNeighbors==3){
            validGrid=true
            return{...cell,alive:true}
         }

         if(validGrid){
            setGeneration(prev=>prev++)
         }
         else{
            setClicable(true)
            return alert(`game over`)
         }

         
      })
      setGrid(nextGeneration)
   }



   const setButtonGrid=(e:any)=>{
      e.preventDefault()
      switch(e.target.value){
         case "Clear Grid":
            setGridSize(15);
            setGrid(defaultGrid1);
            setGeneration(0);
            break;
          case "Default Grid 1":
            setGridSize(15);
            setGrid(defaultGrid2);
            setGeneration(0);
            break;
          case "Default Grid 2":
            setGridSize(15);
            setGrid(defaultGrid3);
            setGeneration(0);
            break;
          case "Default Grid 3":
            setGridSize(15);
            setGrid(defaultGrid4);
            setGeneration(0);
            break;
          default:
            return;
      }
      
   }

   return[
      grid,setGrid,
      generation,setGeneration,
      clicable,setClicable,
      gridSize,setGridSize,
      speed,setSpeed,
      nextStepAuto,
      setButtonGrid,
      createRandomGrid
   ]
}