function openModal(img) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImage.src = img.src;
  }
  
  function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
  }
  