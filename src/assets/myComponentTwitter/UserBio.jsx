
export default function UserBio(props) {

    return (
        <>
            {/* <div > */}

                <div style={{marginLeft: '10px'}}>
                    <p>{props.bio}</p>
                </div>

                <div style={{ display: 'flex', marginBottom: '10px'}}>

                    <div style={{marginLeft: '10px'}} >
                        <img src="project's pictures/broche-de-localisation.png" alt="" style={{width: '20px'}} />
                        <span style={{color: 'white'}}>{props.localisation}</span>
                    </div>
                    <div style={{marginLeft: '10px'}}>
                        <img src="project's pictures/lien.png" alt="" style={{width: '20px'}}/>
                        <span>{props.link}</span>
                    </div>
                    <div style={{marginLeft: '10px'}}>
                        <img src="project's pictures/calendrier.png" alt="" style={{width: '20px'}}/>
                        <span>{props.calendar}</span>
                    </div>
                </div>

                <div style={{ display: 'flex', marginBottom: '50px'}}>
                    <div style={{marginLeft: '10px'}}>
                        <span>{props.following}</span>
                        <span>abonnements</span>
                    </div>
                    
                    <div style={{marginLeft: '10px'}}>
                        <span>{props.followers}</span>
                        <span>abonnés</span>
                    </div>
                </div>

            {/* </div> */}
        </>
    )
}