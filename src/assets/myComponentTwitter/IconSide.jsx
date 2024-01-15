export default function IconSide (props){

    return(

        <>
        <div>
            <img src={props.src} alt="" id="imageIconSide"/>{props.children}<img/>
            {/* <label htmlFor="imageIconSide" >{props.children}</label> */}
        </div>
        </>
    )
}