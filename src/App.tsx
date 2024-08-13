import './App.css'
import Navbar from './components/Navbar';
import PageIntro from './components/Page-Intro';
import ImageSection from './components/ImageSection';

function App(){
    return(
        <>
            <Navbar />
            <PageIntro/>
            <ImageSection/>
        </>
    );
};

export default App;