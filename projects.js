// Load csv data
async function loadCSVData() {
    try {
      // Fetch the CSV file
      const response = await fetch('Projects.csv');
      const csvText = await response.text();
  
      // Parse the CSV data
      const rows = csvText.trim().split('\n').map(row => 
        row.split(';').filter(cell => cell.trim() !== '') // Remove extra empty cells
      );
  
      const headers = rows[0];
      const data = rows.slice(1).map(row => {
        let obj = {};
        row.forEach((cell, index) => obj[headers[index].trim()] = cell.trim());
        return obj;
      });
  
      // Display data in cards
      const container = document.getElementById('cardContainer');
      data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
  
        // Create card content
        card.innerHTML = `
          <h2>${item.name}</h2>
          <p><b>Type:</b> ${item.type}</p>
          <p><b>Tools used:</b> ${item.tools}</p>
          <button class="btn btn-color-2 project-btn"
            onclick="location.href='${item.github}'">
            GitHub
          </button>
          <br></br>
          <button class="btn btn-color-2 project-btn"
            onclick="location.href='${item.liveurl}'">
            View
          </button>
        `;
  
        container.appendChild(card);
      });
    } catch (error) {
      console.error('Error loading CSV data:', error);
    }
  }
  
  // Load data when the page loads
  window.onload = loadCSVData;
  