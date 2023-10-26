/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid';

export function WorkCard({props}) {
    return (
        <div className="workCard" key={uuidv4()}>
            <h4>{props.job}</h4>
            <p>{props.org}</p>
            <p>{props.from} - {props.to}</p>
        </div>
    )
}