import React from 'react';
import './styles.css'

type Props = {}

export const MyComponent = (props: Props):JSX.Element => {

  const [isDisabled, setIsDisabled] = React.useState(true);
  return <div>
    <h1>MyComponent functional component</h1>
    <button onClick={() => setIsDisabled(!isDisabled)} type="button">Toggler</button>
    <button type="button" disabled={isDisabled}>{isDisabled ? 'Can\'t click me' : 'Can click me'}</button>
  </div>;
}

export default MyComponent;