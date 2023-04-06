/* ======================================
        VARIABLE DECLARATIONS
========================================= */
const homeScoreDisplay = document.getElementById('home-score');
const guestScoreDisplay = document.getElementById('guest-score');

const resetButton = document.getElementById('reset-game');
const container = document.querySelector('.container');

let totalHomeScore = 0;
let totalGuestScore = 0;


/* ======================================
        FUNCTIONS
========================================= */

function resetGame() {
        totalGuestScore = 0;
        totalHomeScore = 0;
        guestScoreDisplay.textContent = totalGuestScore;
        homeScoreDisplay.textContent = totalHomeScore;
}

function showLeadingTeam() {
        if (totalHomeScore > totalGuestScore) {
                document.getElementById('home-title').style.color = 'var(--green)';
        } else {
                document.getElementById('home-title').style.color = 'var(--white)';
        }
        if (totalGuestScore > totalHomeScore) {
                document.getElementById('guest-title').style.color = 'var(--green)';
        } else {
                document.getElementById('guest-title').style.color = 'var(--white)';
        }
}


/* ============================
        EVENT LISTENERS
=============================== */

container.addEventListener('click', function (e) {
        const btnClick = e.target;
        const home = btnClick.dataset.homePoint;
        const guest = btnClick.dataset.guestPoint;
        if (home) {
                totalHomeScore += Number(home);
                homeScoreDisplay.textContent = totalHomeScore;
        }

        if (guest) {
                totalGuestScore += Number(guest);
                guestScoreDisplay.textContent = totalGuestScore;
        }
showLeadingTeam()

})

resetButton.addEventListener('click', resetGame)