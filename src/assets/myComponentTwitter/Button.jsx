export default function Button(props) {

    return (

        <>
            <button style={props.style}>{props.children}</button>
        </>
    )
}