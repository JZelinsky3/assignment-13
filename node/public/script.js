document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        const albumContainer = document.getElementById('album-container'); // Updated to match the id in the HTML
        data.forEach(album => {
          const albumElement = document.createElement('div');
          albumElement.classList.add('album');
  
          const imageElement = document.createElement('img');
          imageElement.src = album.image;
          albumElement.appendChild(imageElement);
  
          const titleElement = document.createElement('h2');
          titleElement.textContent = album.title;
          albumElement.appendChild(titleElement);
  
          const artistElement = document.createElement('p');
          artistElement.textContent = `Artist: ${album.artist}`;
          albumElement.appendChild(artistElement);
  
          const yearElement = document.createElement('p');
          yearElement.textContent = `Year: ${album.year}`;
          albumElement.appendChild(yearElement);
  
          const tracksElement = document.createElement('ul');
          album.tracks.forEach(track => {
            const li = document.createElement('li');
            li.textContent = track;
            tracksElement.appendChild(li);
          });
          albumElement.appendChild(tracksElement);
  
          albumContainer.appendChild(albumElement);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });