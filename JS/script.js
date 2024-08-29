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

    { member: { name: 'Wayne', lastName: 'Barnett', job: 'Founder & CEO       ', photo: 'wayne-barnett-founder-ceo.jpg' } },
    { member: { name: 'Angela ', lastName: 'Caroll', job: 'Chief Editor        ', photo: 'angela-caroll-chief-editor.jpg' } },
    { member: { name: 'Walter', lastName: 'Gordon', job: 'Office Manager      ', photo: 'walter-gordon-office-manager.jpg' } },
    { member: { name: 'Angela', lastName: 'Lopez ', job: 'Social Media Manager', photo: 'angela-lopez-social-media-manager.jpg' } },
    { member: { name: 'Scott', lastName: 'Estrada', job: 'Developer           ', photo: 'scott-estrada-developer.jpg' } },
    { member: { name: 'Barbara', lastName: ' Ramos', job: 'Graphic Designer    ', photo: 'barbara-ramos-graphic-designer.jpg' } }
]
console.table(team[0].member)

//Fase di elaborazione

//* 3. Stampare in console le informazioni nel ordine seguente: nome e cognome, ruolo e la stringa della foto.
for (let i = 0; i < team.length; i++) {
    const firstname = team[i].member.name
    const lastName = team[i].member.lastName
    const role = team[i].member.job
    const imgMember = team[i].member.photo

    console.table(`Name: ${firstname} Lastname: ${lastName} Job: ${role} Photo:${imgMember}`)

}