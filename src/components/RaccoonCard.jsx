import profilePic from "../assets/raccoon-icon.jpg"
import chitter from "../assets/chitter.mp3"

function RaccoonCard({ raccoon, audioOn, onDeleteRaccoon }) {

    function handlePlayAudio() {
        if (audioOn) {
            new Audio(chitter).play()
        }
    }

    return (
        <div className="raccoon-card" onClick={handlePlayAudio}>

            <img src={ raccoon.img_url || profilePic } alt="raccoon headshot" />

            <div>
                <p className="bold">{raccoon.name}</p>
                <p>{raccoon.location}</p>
            </div>

            <button 
                className="delete-button" 
                onClick={(e) => {
                    e.stopPropagation(); 
                    onDeleteRaccoon(raccoon.id);
                }}
            >
                Delete
            </button>

        </div>
    )

}

export default RaccoonCard