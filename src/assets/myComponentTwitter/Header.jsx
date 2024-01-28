


export default function Header(props) {

    return (

        <>
            <div style={{ color: 'white', border: 'solid 0.1px #333639', padding: '5px ', width: '555px', display: 'flex', gap: '10px'}}>

                <div style={{fontSize: '30px', paddingTop: '25px'}}>
                    <span>←</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', fontSize: '13px'}}>
                    <h1>{props.nameUser}</h1>
                    <span>{props.postNumber}posts</span>
                </div>
            </div>
        </>
    )
}