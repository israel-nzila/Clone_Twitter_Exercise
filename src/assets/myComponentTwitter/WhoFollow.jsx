import UserName from "./UserName"
import Button from "./Button"

export default function WhoFollow() {

    const contentWhoFollow = {
        profilname: 'The New York Times',

    }

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between', paddingLeft: '10px', paddingRight: '15px'}}>
                <img src="project's pictures/Tweet-Profile-Photo.png" alt="" />
                <UserName style={{ color: 'white'}} name={contentWhoFollow.profilname} />
                <Button style={{color : 'black', width: '140px', borderRadius: '40px', border: 'none', fontSize: '20px'}}>Follow</Button>
            </div>
        </>
    )
}