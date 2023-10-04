import react from 'react'
import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'
import Community from './components/community.js'
import Footer from './components/Footer.js'

function CreateCommunity(){
    return(
        <div>
            <Header/>
            <Sidebar/>
            <Community/>
            {/* <Footer/> */}
        </div>
    );
}

export default CreateCommunity;