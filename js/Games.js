import { Details } from "./gameDetails.js";
import { Ui } from "./UI.js";


export class Games {
    constructor() {
        this.getGames("mmorpg")
        document.querySelectorAll(".menu a").forEach((link) => {
            link.addEventListener('click', (e) => {
                document.querySelector('.menu .active').classList.remove('active')
                e.target.classList.add('active')
                this.getGames(e.target.getAttribute('data-category'))
            })
        })
        this.Ui = new Ui()
    }
    async getGames(Category) {
        let loading = document.querySelector('.loading')
        loading.classList.remove('d-none')
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '63488fa046msh9fce75127b8ac9dp1cd95cjsnb63298530984',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        };


        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${Category}`, options);
        const result = await response.json();
        this.Ui.displayGameData(result)
        this.startEvent();
        loading.classList.add('d-none')
    }
    startEvent() {
        document.querySelectorAll('.card').forEach((item) => {
            item.addEventListener('click', () => {
                let id = item.dataset.id
                this.showDetails(id)
            })
        })
    }
    showDetails(idGame) {
        let details = new Details(idGame)
        document.querySelector('.games').classList.add('d-none')
        document.querySelector('.details').classList.remove('d-none')
    }
}