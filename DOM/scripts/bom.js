document.addEventListener('DOMContentLoaded', function() { 
    const input = document.querySelector('#favchap');  // Select input field
    const button = document.querySelector('button');   // Select Add Chapter button
    const list = document.querySelector('#list');      // Select list

    button.addEventListener('click', function() {
        // Check if input is not empty
        if (input.value.trim() !== '') {
            const li = document.createElement('li');         // Create list item
            const deleteButton = document.createElement('button'); // Create delete button

            deleteButton.textContent = '❌';  // Set delete button text
            li.textContent = input.value;     // Set list item text

            li.append(deleteButton);  // Attach delete button to list item
            list.append(li);          // Add the list item to the list

            input.value = '';         // Clear input field after adding
            input.focus();            // Return focus to input field

            // Delete functionality
            deleteButton.addEventListener('click', function() {
                list.removeChild(li);
            });
        } else {
            alert('Please enter a book and chapter.'); // Message if input is empty
            input.focus(); // Refocus input field
        }
    });
});




