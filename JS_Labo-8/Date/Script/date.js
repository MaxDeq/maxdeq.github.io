const setup = () => {


    //system date
    let start = new Date();
    console.log(start)

    //dag van de week
    console.log(start.getDay())

    //maand
    console.log(start.getMonth()+1)

    //jaar
    console.log(start.getFullYear())

    //dag
    console.log(start.getDate())

    console.log(start.getDate() + "-" + (start.getMonth()+1) + "-" + (start.getFullYear()) + " " + start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds());

    let datum = new Date(2023, 3, 21)

    console.log(datum)

    let geboorte = new Date(2003, 2, 12)
    console.log(Math.round((datum-geboorte) / 86400000));



    let event = new Date()

    console.log("toString " + event.toString());

    console.log("toISOString " + event.toISOString());

    console.log("toDateString " + event.toDateString());

    console.log("toTimeString " + event.toTimeString());






}
window.addEventListener("load", setup);