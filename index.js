activate()

$("#addBtn").click(function () {

    let text = $(".test");
    let note = localStorage.getItem('note');
    let title = $(".titl");


    if (note == null) {
        noteobj = []
    } else {
        noteobj = JSON.parse(note);
    }

    noteobj.unshift([title.val(), text.val()]);
    localStorage.setItem('note', JSON.stringify(noteobj));
    title.val("");
    text.val("");

    activate()

});
function activate() {
    let note = localStorage.getItem('note');
    if (note == null) {
        noteobj = [];
    } else {
        noteobj = JSON.parse(note);
    }

    let htmltext = '';

    noteobj.forEach((element, index) => {

        htmltext += `<div class="card my-2 mx-2"  style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element[0]}</h5>
            <p class="card-text" id="notecard">${element[1]}</p>
            <button type="button" id="${index}" onClick='deletenote(this.id)' class="btn btn-outline-danger btn-sm">Delete note</button>
        </div>
    </div>`

    })

    if (noteobj.length != 0) {
        $("#notes").html(htmltext);
    } else {

        $("#notes").html('Nothng to show add some note.');
    }
}

// to call a function for delete an note

function deletenote(index) {

    let note = localStorage.getItem('note');
    if (note == null) {
        noteobj = [];
    } else {
        noteobj = JSON.parse(note);
    }
    noteobj.splice(index, 1);
    localStorage.setItem('note', JSON.stringify(noteobj));
    activate()
}

// for search a text from the note cards

let inputSearch = document.getElementById('input');
inputSearch.addEventListener('input', function () {

    // to get an access value from search box;
    let searchVal = inputSearch.value;

    let cardnote = document.getElementsByClassName('card')

    Array.from(cardnote).forEach((element) => {

        let cardtext = element.getElementsByTagName('p')[0].innerHTML;

        if (cardtext.includes(searchVal)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';

        }

    })
})