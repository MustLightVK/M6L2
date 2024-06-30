import './Bio.css';

const Bio = (props) => {
    return (
        <div className="bio-container">
            <h1 className="bio-heading">Имя: {props.name}</h1>
            <p className="bio-paragraph">Фамилия: {props.lastName}</p>
        </div>
    )
}

export default Bio;
