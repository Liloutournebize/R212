document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json') // requête vers le fichier JSON
    .then(response => response.json()) // convertir la réponse textuelle en JSON
    .then(data => {
      // traiter les données
      console.log(data);
    });
  
    const trackList = document.getElementById('track-list');
  
    data.forEach(track => {
      const trackDiv = document.createElement('div');
      trackDiv.classList.add('track');
  
      const trackTitle = document.createElement('h2');
      trackTitle.classList.add('track-title');
      trackTitle.textContent = track.name;
      trackDiv.appendChild(trackTitle);
  
      const playButton = document.createElement('button');
      playButton.classList.add('play-btn');
      playButton.textContent = 'Play';
      playButton.addEventListener('click', function() {
        const previewUrl = track.tracks[0].preview_url;
        playTrack(previewUrl);
      });
      trackDiv.appendChild(playButton);
  
      const pauseButton = document.createElement('button');
      pauseButton.classList.add('pause-btn');
      pauseButton.textContent = 'Pause';
      pauseButton.addEventListener('click', pauseTrack);
      trackDiv.appendChild(pauseButton);
  
      trackList.appendChild(trackDiv);
    });
  });
  
  function playTrack(previewUrl) {
    const audio = new Audio(previewUrl);
    audio.play();
  }
  
  function pauseTrack() {
    const audio = document.querySelector('audio');
    if (audio) {
      audio.pause();
    }
  }
  