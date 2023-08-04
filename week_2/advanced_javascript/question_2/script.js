function toggleText(boxIndex) {
    const boxContainers = document.querySelectorAll('.box-container');
    const extraText = boxContainers[boxIndex].querySelector('.extra-text');
    const arrow = boxContainers[boxIndex].querySelector('.arrow');
    
    if (extraText.style.display === '' || extraText.style.display === 'none') {
      extraText.style.display = 'block';
      arrow.innerHTML = '&#x25BC;'; 
    } else {
      extraText.style.display = 'none';
      arrow.innerHTML = '&#x25B2;'; 
    }
  }
  