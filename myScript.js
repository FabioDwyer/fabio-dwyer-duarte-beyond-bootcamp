//  Dropdown Menu
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const dropdownMenu = () => {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = (event) => {
    event.preventDefault();
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName('dropdownContent');

        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


/*************************************************************************** */
// From helpcue 
let rock;
let latinSong;
let bluesSong;
let boogieSong;

function getSong(autoplay, genre, fileName) {
    const playlist = document.createElement("audio");
    playlist.setAttribute("id", "playlist");
    playlist.setAttribute("controls", "controls");
    
    genre = document.createElement("source");
    genre.setAttribute("src", fileName);
    genre.setAttribute("type", "audio/mpeg");
    
    playlist.appendChild(genre);
    playlist.autoplay = autoplay;
    
    const clearList = () => {
        document.getElementById('playlistResult').innerHTML = '';
    }
    clearList();
    document.getElementById('playlistResult').append(playlist);
}


    // Creates click event on each item of the menu (vanilla):
const rockBtn = document.getElementById('rock');
const latinBtn = document.getElementById('latin');
const bluesBtn = document.getElementById('blues');
const boogieBtn = document.getElementById('boogie');

const playSong = () => {
        rockBtn.addEventListener('click', () => {
            alert('play rock song');
        });
}
playSong();



    // const rockBtn = document.getElementById('rock');
    // const latinBtn = document.getElementById('latin');
    // const bluesBtn = document.getElementById('blues');
    // const boogieBtn = document.getElementById('boogie');
    // const playSong = () => {
    //     rockBtn.addEventListener('click', () => {
    //         rockSong();
    //     });
    // }
    // playSong();
