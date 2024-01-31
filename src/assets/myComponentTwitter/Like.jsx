

export default function Like(props) {

    return (
        <>
            <div>

                
                {<img src={props.src} alt="" />}
                {<p>{props.children}</p>}
            </div>
        </>
    )
}