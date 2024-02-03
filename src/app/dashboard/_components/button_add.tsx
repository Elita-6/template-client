// @flow
import * as React from 'react';

type Props = {
    HandleClik: ()=> void
};
export const ButtonAdd = (props: Props) => {
    return (
        <button onClick={props.HandleClik}>

        </button>
    );
};