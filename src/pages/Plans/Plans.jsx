import React from 'react'

import PlansHeader from "./PlansHeader";
import PlansPrevent from "./PlansPrevent";
import PlansDisease from "./PlansDisease";
import PlansCheckbox from "./PlansCheckbox";
import PlansProgram from "./PlansProgram";
import PlansStart from "./PlansStart";
import PlansForm from "./PlansForm";

import "../../styles/Plans/Plans.css";


function Plans() {

    return (
        <>
            <PlansHeader />
            <PlansPrevent />
            <PlansDisease />
            <PlansCheckbox />
            <PlansProgram />
            <PlansStart />   
            <PlansForm />  
        </>
    )
}

export default Plans











