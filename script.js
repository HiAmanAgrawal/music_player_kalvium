
        const musicData = [
            { title: 'Song 1', artist: 'Artist A' },
            { title: 'Song 2', artist: 'Artist B' },
            { title: 'Song 3', artist: 'Artist A' },
            { title: 'Song 4', artist: 'Artist C' },
        ];

        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');
        const resultsDiv = document.getElementById('results');

        function performSearch() {
            const query = searchInput.value.toLowerCase();

            
            resultsDiv.innerHTML = '';

            
            for (const item of musicData) {
                if (item.title.toLowerCase().includes(query) || item.artist.toLowerCase().includes(query)) {
                    const resultItem = document.createElement('div');
                    resultItem.textContent = `${item.title} by ${item.artist}`;
                    resultsDiv.appendChild(resultItem);
                }
            }
        }

        
        searchButton.addEventListener('click', performSearch);

           ('keydown', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });