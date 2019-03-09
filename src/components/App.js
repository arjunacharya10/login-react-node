import React from 'react';
import Navigation from './nav/Navigation';
import Logo from './Logo/Logo';
import ImageLinkFrom from './imgform/ImageLinkForm';
import Rank from './rank/Rank';
import Clarifai from 'clarifai';
import Image from './image/ImageRen';
import Signin from './signin/Signin';
import Register from './Register/Register';
import './App.css';

const app =new Clarifai.App({
    apiKey: 'c25cea99e35741ee9fdf0b2f5c5d646d'
   });


class App extends React.Component{

     

    state={
        input:'',
        image:'',
        route: 'signin',
        isSignedIn: false,
        user: {
            id: 0,
            name: '',
            email: '',
            password: '',
            entries: 0,
            joined: ''
        }
    };



    calculateFace=(data)=>{
        const image = document.getElementById('#inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        console.log('callled');
        console.log(width,height);
    }


    onInputChange=(event)=>{
        this.setState({input: event.target.value});
    }

    onInputSubmit=()=>{
        this.setState({image: this.state.input})
        /*app.models.predict(
            Clarifai.FACE_DETECT_MODEL, 
            this.state.input)
            .then(resp => this.calculateFace(resp))
            .catch(err=> console.log(err));
        console.log('Clicked');*/
        fetch('http://localhost:3000/image',{
            method: 'put',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify({
                id: this.state.user.id
            })
        })
        .then((response)=>response.json())
        .then((data)=>{
            this.setState(Object.assign(this.state.user,{entries: Number(data)}));
        })
    }

    onRouteChange=(r)=>{
        this.setState({route: r});
    }

    loadUser=(data)=>{
        this.setState({user: {
            id: data.id,
            name: data.name,
            email: data.email,
            password: data.password,
            entries: data.entries,
            joined: data.joined}
        });
    }


    render(){
        
        if(this.state.route==='register'){
            return(
                <Register onRouteChange={this.onRouteChange}/>
            );
        }
        
        else if(this.state.route === 'signin'){
            return(
                <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            );
        }
            
        else{
            return (
                
                <div>
                    <Navigation onRouteChange={this.onRouteChange}/>
                    <Logo/>
                    <Rank name={this.state.user.name} rank = {this.state.user.entries}/>
                    <ImageLinkFrom onInputChange={this.onInputChange} onInputSubmit={this.onInputSubmit}/>
                    <Image image ={this.state.image}/>
                </div>
                
            );
        }
    }
}

export default App;