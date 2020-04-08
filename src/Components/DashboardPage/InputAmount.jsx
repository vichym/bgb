import React from 'react';
import { Button, Input, ButtonGroup } from 'reactstrap';

function InputAmount(props) {
    const increment = () => {
        props.this.setState({ amount: props.amount + 1 })
    }
    const decrement = () => {
        props.this.setState({ amount: props.amount - 1 })
    }
    return (
        <ButtonGroup className="m-2 d-flex align-items-center">
            <Button className="align-self-stretch m-1" onClick={decrement}>-</Button>
            <Input type="number" name="amount" autoComplete="true" onChange={props.updateValue} value={props.amount} autoComplete placeholder="specify amount" />
            <Button className="align-self-stretch m-1" onClick={increment}>+</Button>
        </ButtonGroup>
    );
}
export default InputAmount;