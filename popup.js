document.getElementById('read-more-btn').addEventListener('click', function() {
    fetch('popup.html')
        .then(response => response.text())
        .then(data => {
            let popupContainer = document.getElementById('popup-container');
            popupContainer.innerHTML = data;
            popupContainer.style.display = 'block';

            // Close popup when clicking the close button
            document.getElementById('close-popup').addEventListener('click', function() {
                popupContainer.style.display = 'none';
                popupContainer.innerHTML = ''; // Clear the content
            });
        });
});
