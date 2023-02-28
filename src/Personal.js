import './Personal.css';
import './App.css'
import ukieville from './images/ukievill.jpeg'

function Personal() {
    return (
        <div className='Personal'>
            <h1>Personal Life</h1>
            <div className='line'></div>
            <div className='intro'>
                <img src={ukieville} alt="pic of ukie vill" className='headerPhoto'></img>
                <p>
                    I was born and raised in the city of Chicago and lived in Ukrainian 
                    Village for most of my life. I am a first generation Ukrainian and my 
                    parents are from the city of Lviv. I have an older sister and older brother that
                    have both graduated. After highschool I moved to Miami for school because I was 
                    sick of the cold. One of my main hobbies that I participate about five of the 
                    seven days of the week is soccer. I've played soccer all my life and I am on men's 
                    club soccer team here at UM. Another one of my hobbies is watching film. When COVID 
                    hit I began watching a lot of movies which got me into film. My favorite film of all 
                    time is Interstellar. Another hobby that I would like to participate more is traveling. 
                
                </p>
            </div>
        </div>
        

    );
}

export default Personal;