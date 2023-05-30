import React, { useState } from 'react';

const Timer = (props) => { 
const [prevProgress,setProgress] = useState(+props.value);
React.useEffect(() => {
    const timer = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 1);
    }, 1000)
    
    return () => {
        clearInterval(timer);
    };
}, []);
return (<div>{prevProgress}</div>)
}

export default Timer;