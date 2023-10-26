/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid';
 
function EducationCard({props}) {

    return (
        <div className="educationCard" key={uuidv4()}>
            <h4>{props.uni}</h4>
            <p>{props.qual}</p>
            <p>{props.from} - {props.to}</p>
        </div>
    )
}

export default EducationCard