import React from 'react';

const menu = (props) => {
    const style = {
      background: "#48240280",
      color: "white",
      height: "75px",
      fontfamily: 'Rock Salt'
        
    };

    
    return (
          <div style={style} >
              
              {props.children}
           
           </div>
           
    
    );
};

export default menu;