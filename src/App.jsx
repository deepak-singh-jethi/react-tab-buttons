import "./App.css";
import React from "react";
import { useState } from "react";
import TabButton from "./TabButton.jsx";
import {data} from "./data";



export default function App() {

	const[selectedContent,setSelectedContent] = useState("introduction");

	function handleClick(info){
		setSelectedContent(info);
	}
	return (
	<div id = "main">
	    <h1>React</h1>
       <div id = "btnContainer">
		<TabButton isSelected = {selectedContent==="introduction"} onSelect ={()=>handleClick("introduction")}>Introduction</TabButton>
		<TabButton isSelected = {selectedContent==="based"} onSelect ={()=>handleClick("based")}>Component-Based </TabButton>
		<TabButton isSelected = {selectedContent==="vertual"} onSelect ={()=>handleClick("vertual")}>Virtual DOM </TabButton>
		<TabButton isSelected = {selectedContent==="jsx"} onSelect ={()=>handleClick("jsx")}>JSX</TabButton>
		
	   </div>
	   <div id = "contentArea">
		{!selectedContent?(<p>Please Select a topic</p>):(<p>{data[selectedContent]}</p>)};
	   </div>
	   </div>
	)
}
