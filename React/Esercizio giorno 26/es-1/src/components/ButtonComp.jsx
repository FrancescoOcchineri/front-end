export default function ButtonComp(props) {
    return (
        <>
        <h3>{props.title}</h3>
        {props.list.map(ele => <button>{ele.name}</button>)}
        </>
    )
}