import PlansHeader from "../components/Plans/PlansHeader";
import PlansPrevent from "../components/Plans/PlansPrevent";
import PlansDisease from "../components/Plans/PlansDisease";
import PlansCheckbox from "../components/Plans/PlansCheckbox";
import PlansProgram from "../components/Plans/PlansProgram";
import PlansStart from "../components/Plans/PlansStart";
import PlansForm from "../components/Plans/PlansForm";

import "../styles/Plans/Plans.css";


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











