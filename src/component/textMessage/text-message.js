import React from 'react';

const TextMessage = (props) => {
    let input;
    return (
        <div className="inputBox">
            <input 
            onKeyPress={(e) => {
                    if (e.key === 'Enter') {    
                        props.handleClick(input.value);                    
                        input.value = '';
                    }
                }
            } 
              
                type="text" ref={(node) => {
                    input = node;
                }}
                placeholder="Write a reply..." />
        </div>
    )
}

export default TextMessage;