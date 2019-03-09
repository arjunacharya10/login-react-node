import React from 'react';
import './bstyle.css';

class ImageLinkForm extends React.Component{
    render(){
        return(
            <div className="ui segment" style={{background: 'rgba(255,255,255,0)'}}>
                <p className="f3" style={{textAlign: 'center'}}>
                {'This Magic Brain will detect Faces in your pictures. Give it a try'}
                </p>
                <div className="ui item center" style={{maxWidth: '700px'}}>
                    <div className="pa4 br3 shadow-5">
                    <input onChange={(event)=>this.props.onInputChange(event)} className="f4 pa2 w-70 center" type="text"/>
                    <button onClick={this.props.onInputSubmit} className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageLinkForm;