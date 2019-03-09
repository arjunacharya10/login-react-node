import React from 'react';

const Rank = ({name,rank})=>{
    return(

        <div style={{textAlign:'center'}}>
            <div className="white f3">
                {`${name} your current rank is:`}
            </div>
            <div className="white f1" style={{padding:'30px'}}>
                {`#${rank}`}
            </div>
        </div>

    )
}

export default Rank;