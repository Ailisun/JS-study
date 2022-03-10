// let searchFile = (object) => {
//     for ( objectElement in object) {
//         if (objectElement !== `<tr>`) {
//             document.getElementById("sendl4").click();
//         }
//     }
// }

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function isEmpty( el ){
    return !$.trim(el.html())
}

async function test() {
    while (true) {
        if (isEmpty($('#running'))) {
            document.getElementById("sendl4").click();
        }
        await delay(60000);
    }

}

while (true) {
    if (isEmpty($('#running'))) {
        document.getElementById("sendl4").click();
    }
    delay(60000);
}