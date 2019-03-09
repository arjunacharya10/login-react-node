import React from 'react';

const ImageRen=(props)=>{    
    return(
        <div className="ui container item" style={{alignContent:'center'}}>
            <img id="inputImage" style={{alignItems:'center'}} src={props.image} alt="nopes"/>
        </div>
    )
}

export default ImageRen;