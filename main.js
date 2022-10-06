//const { default: axios } = require("axios");

const residentsBtn = document.querySelector(".peepBtn");

const peepBntFunc = () => {
    axios.get('https://swapi.dev/api/planets/2').then( (res) => {
        const residents = res.data['residents']
        for (let i = 0; i < residents.length; i++) {
            axios.get(residents[i]).then((res) => {
                console.log(res.data)
            })
        }
    }
    )
};

residentsBtn.addEventListener('click', peepBntFunc);
