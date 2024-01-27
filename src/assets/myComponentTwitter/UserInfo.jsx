import UserName from "./UserName"
import Button from "./Button"
import UserBio from "./UserBio"

export default function UserInfo() {

    return (
        <>

            <div style={{ marginLeft: '500px', color: 'white', border: 'solid 0.1px #333639', padding: '5px ', width: '555px' }}>
                <Button></Button>
                <UserName></UserName>
                <UserBio></UserBio>

                <div style={{ display: 'flex' }}>
                    <Button>Posts</Button>
                    <Button>Réponses</Button>
                    <Button>Tweets manquants</Button>
                    <Button>Médias</Button>
                    <Button>J'aime</Button>
                </div>

            </div>
        </>
    )
}