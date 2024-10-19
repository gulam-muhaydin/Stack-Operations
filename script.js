let stack = [];

// Function to push a value to the stack
function pushToStack() {
  const inputValue = document.getElementById('stackValue').value;
  if (inputValue) {
    stack.push(inputValue);
    updateStackUI();
    document.getElementById('stackValue').value = ''; // Clear input field
  } else {
    alert('Please enter a value to push!');
  }
}

// Function to pop a value from the stack
function popFromStack() {
  if (stack.length > 0) {
    stack.pop();
    updateStackUI();
  } else {
    alert('Stack is empty!');
  }
}

// Function to update the stack UI
function updateStackUI() {
    const stackContainer = document.querySelector('.stack');
    stackContainer.innerHTML = ''; // Clear the stack container
    
    stack.forEach(item => {
      const stackElement = document.createElement('div');
      stackElement.classList.add('stack-element');
      stackElement.textContent = item;
      stackContainer.appendChild(stackElement);
    });
}
