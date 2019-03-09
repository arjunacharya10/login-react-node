import React from 'react';

class Signin extends React.Component{

    state={
        signinEmail: '',
        signinPassword: ''
    }



    onEmailChange = (event)=>{
        this.setState({signinEmail: event.target.value});
    }

    onPasswordChange = (event)=>{
        this.setState({signinPassword: event.target.value})
    }

    validateExpression=(email,password)=>{
        var re = new RegExp('^.+@.+\.com$');
        if(email.match(re)){
            if(password.length>=5)
            {
                return true;
            }
            else
            {
                alert('Password length >=5');
                return false;
            }
        }
        else{
            alert('Email should be of pattern abc@xyz.com');
            return false;
        }
    }
    
    




    onSubmitSignin=()=>{
        if(this.validateExpression(this.state.signinEmail,this.state.signinPassword)){
            fetch('http://localhost:3000/signin',{
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.signinEmail,
                    password: this.state.signinPassword
                })
            })
            .then(res => res.json())
            .then(user=>{
                if(user!='failed1' && user!='failed2')
                {
                    this.props.loadUser(user);
                    
                    this.props.onRouteChange();
                }
                else if(user==='failed1'){
                    alert('No such user. Please register.');
                }
                else{
                    alert('Password Doesn\'t match.Please try again');
                }
            })
        }
    }


    render(){
        const {onRouteChange} = this.props;
    return(
        <div className="ui container shadow-2" style={{margin:'50px'}}>
                        <main className="pa4 black-80">
            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Sign In</legend>
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
                <div onClick={this.onSubmitSignin} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Sign in</div>
                </div>
                <div className="lh-copy mt3">
                <div style={{cursor:'pointer'}} onClick={()=>onRouteChange('register')} href="#0" className="f6 link dim black db">Register</div>
                </div>
            </form>
            </main>
        </div>
    )
    }
}

export default Signin;