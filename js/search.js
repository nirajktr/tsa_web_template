document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('classSearch').value;
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    // Mock data with provided AP classes
    const classes = [
        'AP Biology',
        'AP Microeconomics',
        'AP Macroeconomics',
        'AP Computer Science A',
        'AP Chemistry',
        'AP Human Geography',
        'AP English Literature & Composition',
        'AP Computer Science Principles',
        'AP Environmental Science',
        'AP United States Government & Politics',
        'AP English Language & Composition',
        'AP Seminar',
        'AP Statistics',
        'AP Comparative Government & Politics',
        'AP Art History',
        'AP Research',
        'AP Precalculus',
        'AP World History',
        'AP Physics C: Mechanics',
        'AP Spanish Language & Culture',
        'AP Calculus AB',
        'AP Calculus BC',
        'AP United States History',
        'AP Physics 1: Algebra Based',
        'AP Psychology',
        'AP 2D Art',
        'AP 3D Art',
        'AP Drawing'
    ];

    const filteredClasses = classes.filter(cls => cls.toLowerCase().includes(query.toLowerCase()));

    // Display results + error checking
    if (filteredClasses.length > 0) {
        const ul = document.createElement('ul');
        ul.classList.add('list-group');
        filteredClasses.forEach(cls => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = cls;
            li.addEventListener('click', () => {
                alert(`You clicked on ${cls}`);
            });
            ul.appendChild(li);
        });
        resultsContainer.appendChild(ul);
    } else {
        resultsContainer.textContent = 'No classes found.';
    }
});