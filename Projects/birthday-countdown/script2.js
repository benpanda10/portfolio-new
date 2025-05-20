// function calculate days

function calculateDays() {

    // get the birthday date from input

    let birthdayInput = document.getElementById('birthdayInput').value
    let birthdayDate = new Date(birthdayInput + 'T12:00:00')
    console.log(birthdayDate)

    // get todays date

    let today = new Date()
    console.log(today)

    // set birthday date to this year

    birthdayDate.setFullYear(today.getFullYear())
    console.log(birthdayDate)

    // If birthday has passed this year, add 1 year

    if (today > birthdayDate) {
        birthdayDate.setFullYear(today.getFullYear() + 1)
        console.log(birthdayDate)
    }

    // calculate difference in days

    let diffTime = birthdayDate - today
    console.log(diffTime)

    let diffDays = Math.ceil(diffTime / (1000*60*60*24))

    resultDiv = document.getElementById('result')
    resultDiv.innerHTML = `
    Your birthday is in ${diffDays} days.
    `
}