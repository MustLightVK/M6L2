import './Data.css';

const Data = (props) => {
    return (
        <div className="data-container">
            <h3 className="data-heading">Дата выполнения: {props.date}</h3>
        </div>
    );
}

export default Data;