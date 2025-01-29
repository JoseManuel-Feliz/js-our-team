console.log('JS OK')

//* STEPS

/* 

* 1. Recuperare gli elementi di interesse all'interno del DOM.

* 2. Creare un array.
    ? 2a Inserire al suo interno una lista di oggeti per ciascuno dei i dati che sono stati forniti. 

* 3. Stampare in console le informazioni nel ordine seguente: nome e cognome, ruolo e la stringa della foto.

* 4. Stampare sul DOM le informazioni nel ordine seguente: nome e cognome, ruolo e la stringa della foto.

*/

//Fase di preparazione

//* 1. Recuperare gli elementi di interesse all'interno del DOM.

const teamWrapper = document.getElementById('team')

/* 
* 2. Creare un array.
    ? 2a Inserire al suo interno una lista di oggeti per ciascuno dei i dati che sono stati forniti.  */
const team = [

    { name: 'Wayne', lastName: 'Barnett', job: 'Founder & CEO', photo: 'wayne-barnett-founder-ceo.jpg' },
    { name: 'Angela ', lastName: 'Caroll', job: 'Chief Editor', photo: 'angela-caroll-chief-editor.jpg' },
    { name: 'Walter', lastName: 'Gordon', job: 'Office Manager', photo: 'walter-gordon-office-manager.jpg' },
    { name: 'Angela', lastName: 'Lopez ', job: 'Social Media Manager', photo: 'angela-lopez-social-media-manager.jpg' },
    { name: 'Scott', lastName: 'Estrada', job: 'Developer', photo: 'scott-estrada-developer.jpg' },
    { name: 'Barbara', lastName: ' Ramos', job: 'Graphic Designer', photo: 'barbara-ramos-graphic-designer.jpg' },
]
console.table(team[0].member)

//Fase di elaborazione

let card = ''
//* 3. Stampare in console le informazioni nel ordine seguente: nome e cognome, ruolo e la stringa della foto.
for (let i = 0; i < team.length; i++) {
    // mi preparo le variabile con l'info dei members
    const memberName = team[i].name + ' ' + team[i].lastName
    const role = team[i].job
    const imgMember = team[i].photo

    console.table(`Name: ${memberName} Job: ${role} Photo:${imgMember}`)


    card += `
    <div class="col">
        <div class="card">
            <img src="./img/${imgMember}" class="card-img-top img-fluid" alt="${memberName} photo">
            <div class="card-body">
            <h5 class="card-title fs-2 fw-semibold">Member Info</h5>
                <p class=" card-text fs-4">${memberName}</p>
                <p class="card-text fs-4">${role}</p>
            </div>
        </div>
    </div>
    `
}

teamWrapper.innerHTML = card