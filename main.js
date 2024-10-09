const year = document.getElementById("age")
const ageYours = document.getElementById("myage");


function ageFinder(){
    //user date of birth
    const date = new Date(year.value)
    const years = date.getFullYear();
    //prasent date
    const today = new Date()
    const todayYear = today.getFullYear();

    //parsent year - user date of bith year = age

    const YourAge = (todayYear-years)

    ageYours.innerHTML = `Your age is:${YourAge}`;

}
