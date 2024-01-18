export default function UserName(props) {


    return (
        <>
            <div style={props.style}>
                <div style={{display: 'flex'}}>
                    <span style={{ fontWeight: "bold", fontSize: '17px' }}>{props.name}</span>
                    <div style={{ marginTop: '-4px' }}><img src="project's pictures/Verified.svg" alt="" /></div>
                </div>
                <span style={{ fontSize: '15px' }}>@{props.name}.</span>
                <span style={{ fontSize: '15px' }}>{props.date}</span>
            </div>
        </>
    )
}