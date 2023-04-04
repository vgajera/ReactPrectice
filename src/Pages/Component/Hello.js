import React from 'react';

const Hello = () => {
    // return(
    //     <div>
    //         <h3>Hello vishal</h3>
    //     </div>   
    // )
    return React.createElement('div', null, React.createElement('h3',{id: 'ghe',className: 'dfdsf',Style: 'color:red',dataTarget:'er'},'Hello vishal') )
}

export default Hello