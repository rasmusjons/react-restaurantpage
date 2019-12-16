import React from 'react';

const menuItem = (props) => {
    
    const style = {
      listStyleType: "none",
      display: "flex"
    }
    const ulStyle = {
        padding: '16px',
        margin: '16px',
        cursor: "pointer",
     
    }

    return (
          <li style={style}>
              <ul key={1} style={ulStyle} onClick={props.clickmenu}> Menu</ul>
              <ul key={2} style={ulStyle} onClick={props.clickbook}> Booking</ul>
              <ul key={3}  style={ulStyle} onClick={props.clickabout}> About</ul> 
           </li>
    
    );
};

export default menuItem;