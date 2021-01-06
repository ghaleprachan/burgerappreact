import React from 'react';
import "./Modal.css"
import Bob from '../../../hoc/Bob'
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => (
    <Bob>
        <Backdrop show={props.show} cliked={props.modalClosed}/>
        <div className="Modal" style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
        </div>
    </Bob>
);
export default modal;