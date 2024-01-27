
export default function CoverPhoto(props) {

    return (

        <>
            <div style={{ marginLeft: '500px', color: 'white', border: 'solid 0.1px #333639', padding: '5px ', width: '555px' }}>
                <img src={props.src} alt="" />
            </div>
        </>
    )
}