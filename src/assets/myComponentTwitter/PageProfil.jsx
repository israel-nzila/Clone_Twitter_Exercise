import Header from "./Header"
import CoverPhoto from "./CoverPhoto"
import UserInfo from "./UserInfo"
import ProfilPicture from "./ProfilPicture"
import Tweet from "./Tweet"


export default function PageProfil() {

    return (
        <>
            <Header></Header>
            <CoverPhoto></CoverPhoto>
            <UserInfo></UserInfo>

            <div style={{ display: 'flex' }}>
                <ProfilPicture></ProfilPicture>
                <Tweet></Tweet>
            </div>
        </>
    )
}