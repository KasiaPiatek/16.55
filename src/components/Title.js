import React from 'react';
import style from './Title.css';


const Title = props => {
	return(
	
	<div classNAme={style.Title}>
	<h1>{props.title} {props.length}</h1>
	</div>
	);
}



export default Title;


