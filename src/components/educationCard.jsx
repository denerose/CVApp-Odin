/* eslint-disable react/prop-types */
function EducationCard({props}) {

    return (
        <div className="educationCard">
            <h4>{props.uni}</h4>
            <p>{props.qual}</p>
            <p>{props.from} - {props.to}</p>
        </div>
    )
}

export default EducationCard