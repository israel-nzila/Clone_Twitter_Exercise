import './App.css'
import Post from './assets/myComponentTwitter/Post'
import IconsPost from './assets/myComponentTwitter/IconsPost'
import Button from './assets/myComponentTwitter/Button'
import ProfilPicture from './assets/myComponentTwitter/ProfilPicture'
import react from '@heroicons/react'
import Tweet from './assets/myComponentTwitter/Tweet'
import IconSide from './assets/myComponentTwitter/IconSide'
import SquidBar from './assets/myComponentTwitter/SquidBar'


const tweet = {
  name: 'CNN',
  text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont like.',
  likes: '22',
  comments: '345',
  date: '  7m',
  src: "project's pictures/Img.png",
}


function App() {

  return (
    <>
    {/* concern the post zone */}

      <div style={{ marginLeft: '500px', color: 'white', border: 'solid 0.1px #333639', padding: '5px ', width: '555px' }}>
        <div style={{ paddingLeft: '14px' }}>
          <h1>Home</h1>

          <div style={{ display: 'flex', gap: '0px', marginBottom: '30px' }}>
            <ProfilPicture src="project's pictures/Profile-Photo.png" />
            <Post style={{ border: 'none', width: '400px', height: '60px', borderRadius: 60, marginLeft: '15px', paddingTop: '7px', background: 'black', color: "#333639", fontWeight: '400', fontSize: '24px' }} value="What's happening ?"/>
          </div>

          <IconsPost></IconsPost>

          <div style={{ marginLeft: '407px', marginTop: '-33px' }}>
            <Button style={{ width: '80px', height: '40px', background: 'rgb(29, 155, 240)', borderRadius: 50, border: 'none', color: 'white' }}>Tweet</Button>
          </div>

        </div>
      </div>

{/* concern the body zone (posts) */}

      <div style={{ marginLeft: '500px', color: 'white', border: 'solid 0.1px #333639', padding: '5px ', width: '555px' }}>
        <div style={{ display: 'flex', }}>
          <ProfilPicture src="project's pictures/Profile-Photo(2).png" />
          <Tweet tweet={tweet} />
        </div>
      </div>

      <div style={{ marginLeft: '500px', color: 'white', border: 'solid 0.1px #333639', padding: '5px ', width: '555px' }}>
        <div style={{ display: 'flex', }}>
          <ProfilPicture src="project's pictures/Profile-Photo(2).png" />
          <Tweet tweet={tweet} />
        </div>
      </div>

{/* concern the Left side bar */}


      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginLeft: '240px', position: 'relative', marginTop: '-1119px' }}>
        <div>
          <IconSide src="project's pictures/Twitter.svg" alt="" />
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <IconSide src="project's pictures/Home.svg" alt="" />
          <span className='legendIconSide' style={{ color: 'white', fontWeight: 'bold' }}>Home</span>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <IconSide src="project's pictures/Explore.svg" alt="" />
          <span style={{ color: 'white', fontWeight: 'bold' }}>Explore</span>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <IconSide src="project's pictures/Notifications.svg" alt="" />
          <span style={{ color: 'white', fontWeight: 'bold' }}>Notifications</span>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <IconSide src="project's pictures/Messages.svg" alt="" />
          <span style={{ color: 'white', fontWeight: 'bold' }}>Messages</span>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <IconSide src="project's pictures/Bookmarks.svg" alt="" />
          <span style={{ color: 'white', fontWeight: 'bold' }}>Bookmarks</span>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <IconSide src="project's pictures/Lists.svg" alt="" />
          <span style={{ color: 'white', fontWeight: 'bold' }}>Lists</span>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <IconSide src="project's pictures/Profile.svg" alt="" />
          <span style={{ color: 'white', fontWeight: 'bold' }}>Profile</span>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <IconSide src="project's pictures/More.svg" alt="" />
          <span style={{ color: 'white', fontWeight: 'bold' }}>More</span>
        </div>

        <div>
          <Button style={{ width: '200px', height: '40px', background: 'rgb(29, 155, 240)', borderRadius: 50, border: 'none', color: 'white' }}>Tweet</Button>
        </div>
      </div>

{/* concern the right side bar */}

      <div style={{background: 'black', width: '410px', height: '70px', position: 'relative', marginTop: '-600px', marginLeft: '70rem'}}>
        <Post style={{height: '40px', width: '400px', borderRadius: '40px', background: '#0F1419', color: '#6E767D', fontSize: '15px', border: 'none', paddingLeft: '50px'}} value="Search Twitter"></Post>
      </div>
      <div style={{position: 'relative', marginLeft: '71rem', marginTop: '-55px'}}><img src="project's pictures/Search.svg" alt="" /></div>

      <div style={{color: 'white'}}>
      <SquidBar></SquidBar>
      

      </div>
    </>
  )


};

export default App
