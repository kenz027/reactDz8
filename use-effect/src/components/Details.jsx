export default function Details(props){
  const details = props.details;
  const careerDetails = details.details;
  return (
    <>
      {props.isLoading ? (
        <p>Loading..</p>
      ) : (
        <div>
          <img src={details.avatar} alt='avatar'/>
          <p>{details.name}</p>
          <p>City: {careerDetails.city}</p>
          <p>Company: {careerDetails.company}</p>
          <p>Position: {careerDetails.position}</p>
        </div>
      )}
    </>
  );
}
