import React from 'react';

const Navigation=(props)=>{
    return(
        <div onClick={()=>props.onRouteChange('signin')} style={{display: 'flex',justifyContent: 'flex-end'}}>
            <nav>
                <p className="f3 link dim black underlined pa3 pointer">Sign out</p>
            </nav>
        </div>
    );
}

export default Navigation;