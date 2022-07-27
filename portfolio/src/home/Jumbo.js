import { Link } from "react-router-dom";

const Jumbo = (props) => {
    return (
    <div class="jumbotron">
        <h1 class="display-4">{props.title}</h1>
        <p class="lead">{props.subTitle}</p>
        <hr class="my-4"/>
        <p>{props.desc}</p>
        <p class="lead">
            <Link class="btn btn-primary btn-lg" to="/project" role="button">Learn more</Link>
        </p>
    </div>
    );
}
 
export default Jumbo;