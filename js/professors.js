document.addEventListener('DOMContentLoaded', function() {
    const professorList = document.getElementById('professorList');

    // Mock data for professors
    const professors = [
        { name: 'Dr. Smith', classes: ['AP Biology'] },
        { name: 'Ms. Johnson', classes: ['AP Biology'] },
        { name: 'Mr. Brown', classes: ['AP Microeconomics'] },
        { name: 'Ms. Davis', classes: ['AP Macroeconomics'] },
        { name: 'Dr. Wilson', classes: ['AP Computer Science A'] },
        { name: 'Dr. Martinez', classes: ['AP Chemistry'] },
        // Add more professors as needed
    ];

    professors.forEach(prof => {
        const professorItem = document.createElement('a');
        professorItem.href = '#';
        professorItem.classList.add('list-group-item', 'list-group-item-action');
        professorItem.textContent = prof.name;
        professorItem.addEventListener('click', () => {
            alert(`Professor: ${prof.name}\nClasses: ${prof.classes.join(', ')}`);
        });
        professorList.appendChild(professorItem);
    });
});