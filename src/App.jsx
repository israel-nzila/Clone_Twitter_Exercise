import './App.css'
import Post from './assets/myComponentTwitter/Post'
import IconsPost from './assets/myComponentTwitter/IconsPost'
import Button from './assets/myComponentTwitter/Button'
import ProfilPicture from './assets/myComponentTwitter/ProfilPicture'
import react from '@heroicons/react'
import IconSide from './assets/myComponentTwitter/IconSide'
import SquidBar from './assets/myComponentTwitter/SquidBar'
import WhoFollow from './assets/myComponentTwitter/WhoFollow'
import HomePage from './assets/pages/HomePage'
import Footer from './assets/myComponentTwitter/Footer'
import { Routes, Route, Link } from "react-router-dom"
import ProfilPage from './assets/pages/ProfilPage'






function App() {

  return (
    <>
      <div className=''>


      <div className='m-'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/profil' element={<ProfilPage />} />
          </Routes>
        </div>

        
        <div  >
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
              <Link to='/profil' style={{ color: 'white', fontWeight: 'bold' }}>Profile</Link>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <IconSide src="project's pictures/More.svg" alt="" />
              <span style={{ color: 'white', fontWeight: 'bold' }}>More</span>
            </div>

            <div>
              <Button style={{ width: '200px', height: '40px', background: 'rgb(29, 155, 240)', borderRadius: 50, border: 'none', color: 'white' }}>Tweet</Button>
            </div>
          </div>
        </div>

        

        <div>
          <div style={{ background: 'black', width: '410px', height: '70px', position: 'relative', marginTop: '-600px', marginLeft: '70rem' }}>
            <Post style={{ height: '40px', width: '400px', borderRadius: '40px', background: '#0F1419', color: '#6E767D', fontSize: '15px', border: 'none', paddingLeft: '50px' }} value="Search Twitter"></Post>
          </div>
          <div style={{ position: 'relative', marginLeft: '71rem', marginTop: '-55px' }}><img src="project's pictures/Search.svg" alt="" /></div>

          <div style={{ color: 'white' }}>
            <SquidBar></SquidBar>
          </div>

          <div style={{ background: '#0F1419', width: '450px', height: '350px', position: 'relative', marginLeft: '70rem', borderRadius: '20px', marginTop: '15px' }}>
            <div style={{ paddingTop: '15px', paddingLeft: '10px' }}>
              <h2 style={{ color: 'white' }}>Who to follow</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <WhoFollow></WhoFollow>
                <WhoFollow></WhoFollow>
                <WhoFollow></WhoFollow>
              </div>
            </div>
          </div>

          <Footer></Footer>
        </div>

        


      </div>
    </>
  )


};

export default App
