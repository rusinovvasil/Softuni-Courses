async function lockedProfile() {

    const url = `http://localhost:3030/jsonstore/advanced/profiles`;
    const templateProfil = document.querySelector('.profile');
    templateProfil.remove();

    try {
        const res = await fetch(url);
        if (res.status !== 200) {
            throw new Error("Error");
        }

        const data = await res.json();

        Object.keys(data).forEach((key, index) => {
            let createPerson = data[key];
            let createPersonElement = createProfile(index + 1, createPerson.username, createPerson.email, createPerson.age);
        })

    } catch (error) {
        console.log('Error')
    }

}

function createProfile(userCard, username, email, age) {

    const mainElement = document.getElementById('main');

    const divProfile = document.createElement('div');
    divProfile.classList.add('profile');
    mainElement.appendChild(divProfile);

    const imgProfile = document.createElement('img');
    imgProfile.classList.add('userIcon');
    imgProfile.src = './iconProfile2.png';
    divProfile.appendChild(imgProfile);

    const lockLabel = document.createElement('label');
    lockLabel.textContent = 'Lock';
    divProfile.appendChild(lockLabel);

    const lockCheck = document.createElement('input');
    lockCheck.type = 'radio';
    lockCheck.name = `user${userCard}Locked`;
    lockCheck.value = 'lock';
    lockCheck.checked = true;
    divProfile.appendChild(lockCheck);

    const unlockLabel = document.createElement('label');
    unlockLabel.textContent = 'Unlock';
    divProfile.appendChild(unlockLabel);

    const unlockCheck = document.createElement('input');
    unlockCheck.type = 'radio';
    unlockCheck.name = `user${userCard}Locked`;
    unlockCheck.value = 'unlock';
    divProfile.appendChild(unlockCheck);

    const br = document.createElement('br');
    divProfile.appendChild(br);

    const hr = document.createElement('hr');
    divProfile.appendChild(hr);

    const userlLabel = document.createElement('label');
    userlLabel.textContent = 'Username';
    divProfile.appendChild(userlLabel);

    const userNameInput = document.createElement('input');
    userNameInput.name = `user${userCard}Username`;
    userNameInput.value = username;
    userNameInput.readonly = true;
    userNameInput.disabled = true;
    divProfile.appendChild(userNameInput);

    const hiddenFieldsUser = document.createElement('div');
    hiddenFieldsUser.id = `user${userCard}HiddenFields`;
    divProfile.appendChild(hiddenFieldsUser);

    const hrTwo = document.createElement('hr');
    hiddenFieldsUser.appendChild(hrTwo);

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    hiddenFieldsUser.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = `user${username}Email`;
    emailInput.value = email;
    emailInput.readonly = true;
    emailInput.disabled = true;
    hiddenFieldsUser.appendChild(emailInput);

    const ageLabel = document.createElement('label');
    ageLabel.textContent = 'Age:';
    hiddenFieldsUser.appendChild(ageLabel);

    const ageInput = document.createElement('input');
    ageInput.type = 'email';
    ageInput.name = `user${username}Age`;
    ageInput.value = age;
    ageInput.readonly = true;
    ageInput.disabled = true;
    hiddenFieldsUser.appendChild(ageInput);

    const showMoreBtn = document.createElement('button');
    showMoreBtn.textContent = 'Show more';
    showMoreBtn.addEventListener('click', showHiddentInfo)
    divProfile.appendChild(showMoreBtn);


    function showHiddentInfo(ev) { /* Показване на данни от профила в зависимост от радио бутона = lock/unlock*/
        let profile = ev.target.parentElement; // Взима целия HTML
        let SowMoreBthEl = ev.target //Взима само клик бутона
        let hiddenFieldsUser = ev.target.previousElementSibling; // Взима целия таг преди бутона
        let lockRadioBtn = profile.querySelector('input[type="radio"]:checked'); /* Взима първият радио буто и го проверява дали е checked*/

        if (lockRadioBtn.value !== 'unlock') { /* Ако е не е отключен не прави нищо*/
            return
        }

        SowMoreBthEl.textContent = SowMoreBthEl.textContent === 'Show more' /* Ако е отклю. Ако името на бутона е Show more == Hide it и обратното*/
            ? 'Hide it'
            : 'Show more';

        hiddenFieldsUser.style.display = hiddenFieldsUser.style.display === 'block' 
            ? 'none' /* СКРИВА => To hide an element, set the style display property to “none”.*/ 
            : 'block' /* ПОКАЖИ => To show an element, set the style display property to “block”.*/
    }
}

