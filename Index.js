const imageList = document.getElementById('image-list');
const imageInput = document.getElementById('image-input');
const imagePreview = document.getElementById('image-preview');

function uploadImage() {
    const file = imageInput.files[0];
    if(file) {
        const imageURL = URL.createObjectURL(file);

        const imageItem = document.createElement('li');
        imageItem.className = 'image-item';
        imageItem.innerHTML = `
           <img src="${imageURL}" alt="Uploaded Image">
           <button onclick="removeImage(this)">Delete</button>
        `;
        imageList.appendChild(imageItem);

        // display image preview 
        imagePreview.innerHTML = `<img src="${imageURL}" alt="Uploaded Image">`;

        // clear the input 

        imageInput.value='';
    }
}

function removeImage(button) {
    const imageItem = button.parentNode;    
    imageList.removeChild(imageItem);

    if(imageList.children.length === 0) {
        imagePreview.innerHTML = '';
    }
}