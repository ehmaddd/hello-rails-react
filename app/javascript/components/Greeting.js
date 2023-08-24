import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from "../features/greeting/greetingSlice";

const Greeting = () => {
    const dispatch = useDispatch();
    const greeting = useSelector((state) => state.greeting.greeting.greeting);

    useEffect(() => {
        dispatch(getGreeting());
      }, []);

    return (
        <h1>{greeting}</h1>
    )
}

export default Greeting;
