import React from 'react';
import FocusInput from './FocusInput';
import ParentComp from './ParentComp';
import PureComp from './PureComp';
import RefsDemo from './RefsDemo';
import ChildComponent from './ChildComponent';
import StyleSheet from './StyleSheet';

function example() {
  return (
    <div>
        {/* <Link ></Link> */}
        <PureComp />
        <RefsDemo />
        <ParentComp />
        <FocusInput />
        <ChildComponent />
        <div className='page-section'>
            <h6>stylesheet demo</h6>
            <StyleSheet primary={true} />
        </div>
    </div>
  )
}

export default example