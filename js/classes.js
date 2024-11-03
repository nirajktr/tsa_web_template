document.addEventListener('DOMContentLoaded', function() {
    const classList = document.getElementById('classList');

    // Mock data for classes
    const classes = [
        { name: 'AP Biology', teachers: ['Dr. Smith', 'Ms. Johnson'] },
        { name: 'AP Microeconomics', teachers: ['Mr. Brown'] },
        { name: 'AP Macroeconomics', teachers: ['Ms. Davis'] },
        { name: 'AP Computer Science A', teachers: ['Dr. Wilson'] },
        { name: 'AP Chemistry', teachers: ['Dr. Martinez'] },
        // Need more classes
    ];

    classes.forEach(cls => {
        const classItem = document.createElement('a');
        classItem.href = '#';
        classItem.classList.add('list-group-item', 'list-group-item-action');
        classItem.textContent = cls.name;
        classItem.addEventListener('click', () => {
            alert(`Class: ${cls.name}\nTeachers: ${cls.teachers.join(', ')}`);
        });
        classList.appendChild(classItem);
    });
});