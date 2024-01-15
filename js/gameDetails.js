import { Ui } from "./UI.js";

export class Details {
    constructor(id) {
        this.Ui = new Ui()
        document.getElementById("btnClose").addEventListener('click', () => {
            document.querySelector('.games').classList.remove('d-none')
            document.querySelector('.details').classList.add('d-none')

        });
        this.getDetails(id);
    }

    getDetails(idGames) {
        const loading = document.querySelector(".loading")
        loading.classList.remove("d-none");
        let options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '63488fa046msh9fce75127b8ac9dp1cd95cjsnb63298530984',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options)
            .then((response) => response.json())
            .then((response) => this.Ui.displayDetails(response))
            .catch((err) => console.error(err))
            .finally(() => {
                loading.classList.add("d-none")
            });
    }
}