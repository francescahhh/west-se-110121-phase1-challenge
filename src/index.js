const flatagramAPI = "http://localhost:3000/images/1"

//make fetch request
function getOurData() {
    fetch(flatagramAPI)
    .then(response => response.json())
    .then(data => console.log(data));
}
console.log(getOurData())

// display image received from the server
function displayImage() {
    let img = document.createElement('img');
    img.src = images[image]
    let src = document.getElementById('card-image')
    src.appendChild(img) }

displayImage(images[image])  

/*
Little confused here because I thought the data we got from our API is an array of
 objects so I don't understand why it doesn't seem to be letting me me access
elements in the array using bracket notation? ("Uncaught ReferenceError: images 
is not defined".....but isn't images the name of our json array?)
*/

//display title of image
function displayTitle(flatagramTitle) {
    let cardTitle = document.getElementById('card-title')
    cardTitle.textContent = images[title];
    cardTitle.append(cardTitle)
}
displayTitle(images[title])

//display likes
function displayLikes(flatagramLikes) {
    let likesDisplay = document.getElementById('like-count')
    likesDisplay.textContent = images[likes];
    likesDisplay.append(likesDisplay)

}
//display comments

function displayComments(flatagramComments) {
    let commentDisplay = document.getElementById('comment-list')
    commentDisplay.textContent = images.comments.content;
    commentDisplay.append()
}

//Click on the heart icon to increase image likes on the page. No persistence is needed.
    //add event listener to like button on click
let heartButton = document.getElementById('like-button')
    heartButton.addEventListener("click", () => {

    })

//Add a new comment to the page when the comment form is submitted. No persistence is needed.
    //add event listener on submit

let submissionForm = document.getElementById('comment-form')
submissionForm.addEventListener("submit", () => {

})