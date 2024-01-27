import ProfilPicture from "./ProfilPicture"
import IconsPost from "./IconsPost"
import Button from "./Button"
import Post from "./Post"


export default function PostZone(){

    return(

        <>
        <div style={{ marginLeft: '500px', color: 'white', border: 'solid 0.1px #333639', padding: '5px ', width: '555px' }}>
        <div style={{ paddingLeft: '14px' }}>
          <h1>Home</h1>

          <div style={{ display: 'flex', gap: '0px', marginBottom: '30px' }}>
            <ProfilPicture src="project's pictures/Profile-Photo.png" />
            <Post style={{ border: 'none', width: '400px', height: '60px', borderRadius: 60, marginLeft: '15px', paddingTop: '7px', background: 'black', color: "#333639", fontWeight: '400', fontSize: '24px' }} value="What's happening ?" />
          </div>

          <IconsPost></IconsPost>

          <div style={{ marginLeft: '407px', marginTop: '-33px' }}>
            <Button style={{ width: '80px', height: '40px', background: 'rgb(29, 155, 240)', borderRadius: 50, border: 'none', color: 'white' }}>Tweet</Button>
          </div>

        </div>
      </div>
        </>
    )
}