// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.querySelectorAll('.image img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Loop through each image and add click event
img.forEach(function(image) {
    image.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
