import React from 'react';
import Bob from '../../../hoc/Bob'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>
                    {igKey}
                </span>
                :{props.ingredients[igKey]}
            </li>
        });
    return (
        <Bob>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <h3><strong>Current Price: {props.totalPrice.toFixed(2)}</strong></h3>
            <p>Continue to checkout?</p>
            <Button
                btnType="Danger"
                clicked={props.purchaseCanceled}>
                CANCEL
            </Button>
            <Button
                btnType="Success"
                clicked={props.purchaseContinue}>
                CONTINUE
            </Button>
        </Bob>
    )
}

export default orderSummary;