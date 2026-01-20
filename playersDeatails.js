import { initializeApp } from "https://www.gstatic.com";
import { getDatabase, ref, onValue } from "https://www.gstatic.com";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const playersRef = ref(db, 'players/');

// This function runs every time a new player is added or updated
onValue(playersRef, (snapshot) => {
    const data = snapshot.val();
    const tableBody = document.getElementById("playerTableBody");
    tableBody.innerHTML = ""; // Clear current table

    for (let id in data) {
        const player = data[id];
        tableBody.innerHTML += `
            <tr>
                <td>${player.playerName}</td>
                <td>${player.tShirtNumber}</td>
                <td>${player.tShirtSize}</td>
                <td>${player.dateOfBirth}</td>
            </tr>
        `;
    }
});
