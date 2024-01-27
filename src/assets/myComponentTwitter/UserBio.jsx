
export default function UserBio(props) {

    return (
        <>
            <div>
                <div>
                    <p>{props.bio}</p>
                </div>

                <div style={{ display: 'flex' }}>
                    <div>
                        <img src="project's pictures/broche-de-localisation.png" alt="" />
                        <span>{props.localisation}</span>
                    </div>
                    <div>
                        <img src="project's pictures/lien.png" alt="" />
                        <span>{props.link}</span>
                    </div>
                    <div>
                        <img src="project's pictures/calendrier.png" alt="" />
                        <span>{props.calendar}</span>
                    </div>
                </div>

                <div style={{ display: 'flex' }}>
                    <div>
                        <span>{props.following}</span>
                        <span>abonnements</span>
                    </div>
                    <div>
                        <span>{props.followers}</span>
                        <span>abonnés</span>
                    </div>
                </div>

            </div>
        </>
    )
}