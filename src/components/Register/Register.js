import React from 'react';

class Register extends React.Component{
    
    
    state={
        name: '',
        email: '',
        password: ''
    };

    onNameChange=(event)=>{
        this.setState({name: event.target.value});
    }
    
    onEmailChange=(event)=>{
        this.setState({email: event.target.value});
    }
    
    onPasswordChange=(event)=>{
        this.setState({password: event.target.value});
    }

    validateExpression=(name,email,password)=>{
        if(name){
            var re = new RegExp('^.+@.+\.com$');
            if(email.match(re)){
                if(password.length>=5){
                    console.log(password.length);
                    return true;
                }
                else{
                    console.log(password.length);
                    alert("password length >=5");
                    return false;
                }
            }
            else{
                alert("Email should be if the form abc@xyz.com");
                return false;
            }
        }
        else{
            alert('Dont leave the name blank!');
            return false;
        }
    }
    
    
    onSubmitPressed=async ()=>{
        if(this.validateExpression(this.state.name,this.state.email,this.state.password)){
            await fetch('https://hidden-brushlands-57444.herokuapp.com/register',{
                method: 'post',
                headers:{'Content-type':'application/json'},
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then(res=>res.json())
            .then(user=>{
                if(user==='success')
                {
                    //loadUser(user)
                    alert("Registered successfully! Please Sign in.")
                    this.props.onRouteChange('signin');
                }
                else{
                    alert('Failed to Register!!');
                }
            })
        }
    }

    /*componentDidMount=()=>{
        document.addEventListener('keydown',this.handleEnter);
    }

    handleEnter=(event)=>{
        if(event.keyCode===13)
            this.onSubmitPressed();
    }*/

    
    
    render(){
    return(
        <div className="ui container shadow-2" style={{margin:'50px'}}>
                        <main className="pa4 black-80">
            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                </div>
                <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
                </fieldset>
                <div className="">
                <div  onClick={this.onSubmitPressed} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Sign Up</div>
                </div>
                <div className="lh-copy mt3">
                </div>
                <div className="lh-copy mt3">
                <div style={{cursor:'pointer'}} onClick={()=>this.props.onRouteChange('signin')} href="#0" className="f6 link dim black db">Already registerd? Sign in</div>
                </div>
            </form>
            </main>
        </div>
    )
    }
}

export default Register;