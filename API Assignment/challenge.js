function getCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => document.getElementById('catFactDisplay').textContent = data.fact)
        .catch(err => {
            document.getElementById('catFactDisplay').textContent = 'Failed to fetch a cat fact. Please try again.';
        });
}