
export default function Header(props) {

    return (

        <>
            <div style={{ marginLeft: '500px', color: 'white', border: 'solid 0.1px #333639', padding: '5px ', width: '555px' }}>

                <div>
                    <span>←</span>
                </div>
                <div>
                    <h1>{props.nameUser}</h1>
                    <span>{props.postNumber}posts</span>
                </div>
            </div>
        </>
    )
}