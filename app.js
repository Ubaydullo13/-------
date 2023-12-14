   const addWordBtn = document.getElementById('addWordBtn');
    addWordBtn.addEventListener('click', addWord);
  
  function addWord() {
    const enInput = document.getElementById('enInp').value;
    const ruInput = document.getElementById('ruInp').value;
  
    if (enInput && ruInput) {
      const wordList = document.getElementById('wordList');
      const learnedList = document.getElementById('learnedList');
  
      
      const listItem = document.createElement('li');
      listItem.textContent = enInput + ' - ' + ruInput;
  
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', function() {
        moveWord(listItem, wordList, learnedList, checkbox.checked);
      });
  
      
      listItem.appendChild(checkbox);
      wordList.appendChild(listItem);
  
      
      document.getElementById('enInp').value = '';
      document.getElementById('ruInp').value = '';
    }
  }
  
  function moveWord(item, fromList, toList, isChecked) {
    if (isChecked) {
      
      toList.appendChild(item);
    } else {
    
      fromList.appendChild(item);
    }
  }
  
