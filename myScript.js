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
// New option - the onclick doesn't close outside the button!!
// window.onclick = function (event) {
//     event.preventDefault();
//     const dropdowns = document.getElementById('myDropdown');
    
//         if (!event.target.matches('.dropbtn')) {
//             dropdowns.toggleClass('show');
//         } else {
//             dropdowns.removeClass('show');
//         }
//     }


    // Audio:
    // Song #1
    function rockSong(autoplay) {
        const playlist = document.createElement("audio");
        playlist.setAttribute("id", "playlist");
        playlist.setAttribute("controls", "controls");

        const rock = document.createElement("source");
        rock.setAttribute("src", "./assets/audioFiles/01rock.mp3");
        rock.setAttribute("type", "audio/mpeg");
        playlist.appendChild(rock);

        // Set the autoplay property:
        playlist.autoplay = autoplay;
        $('#playlistResult').empty();
        $('#playlistResult').append(playlist);
    }

    // Song #2
    function latinSong(autoplay) {
        const playlist = document.createElement("audio");
        playlist.setAttribute("controls", "controls");

        const latin = document.createElement("source");
        latin.setAttribute("src", "./assets/audioFiles/02latin.mp3");
        latin.setAttribute("type", "audio/mpeg");
        playlist.appendChild(latin);

        playlist.autoplay = autoplay;
        $('#playlistResult').empty();
        $('#playlistResult').append(playlist);
    }

    // Song #3
    function bluesSong(autoplay) {
        const playlist = document.createElement("audio");
        playlist.setAttribute("controls", "controls");

        const blues = document.createElement("source");
        blues.setAttribute("src", "./assets/audioFiles/03blues.mp3");
        blues.setAttribute("type", "audio/mpeg");
        playlist.appendChild(blues);

        playlist.autoplay = autoplay;
        $('#playlistResult').empty();
        $('#playlistResult').append(playlist);
    }

    // Song #4
    function boogieSong(autoplay) {
        const playlist = document.createElement("audio");
        playlist.setAttribute("controls", "controls");

        const boogie = document.createElement("source");
        boogie.setAttribute("src", "./assets/audioFiles/04boogie.mp3");
        boogie.setAttribute("type", "audio/mpeg");
        playlist.appendChild(boogie);

        playlist.autoplay = autoplay;
        $('#playlistResult').empty();
        $('#playlistResult').append(playlist);
    }

    // Creates click event on each item of the menu:
    $('#rock').on('click', function () {
        rockSong(true);
    });

    $('#latin').on('click', function () {
        latinSong(true);
    });

    $('#blues').on('click', function () {
        bluesSong(true);
    });

    $('#boogie').on('click', function () {
        boogieSong(true);
    });

