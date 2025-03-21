// Project data
const projectsData = {
    "sugarplum": {
      title: "Sugarplum",
      category: "Mobile Game",
      year: "2024/25",
      client: "Personal Project",
      description: "Bake cakes, decorate them, and sell to happy customers. A cozy little bakery at your own pace. Still a little work in progress – the video shows a small snippet.",
      images: [
        "https://placehold.co/800x1200"
      ],
      video: "images/game1.mov" 
    },
    "typewriter": {
      title: "Typewriter",
      category: "3D-Graphic",
      year: "2024",
      client: "University Project",
      description: "A vintage Olympia typewriter sits on a wooden desk, mid-letter. A red flower, handwritten note, coffee cup, and warm lamp complete the cozy, nostalgic scene.",
      images: [
        "images/render.png"
      ]
    },
  };
  
  // Get project ID from URL
  function getProjectId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  }
  
  // Load project data
  function loadProjectData() {
    const projectId = getProjectId();
    
    if (projectId && projectsData[projectId]) {
      const project = projectsData[projectId];
      
      // Update page title
      document.title = `${project.title} - Portfolio`;
      
      // Update project details
      document.getElementById('project-title').textContent = project.title;
      document.getElementById('project-description').textContent = project.description;
      document.getElementById('project-year').textContent = project.year;
      document.getElementById('project-category').textContent = project.category;
      document.getElementById('project-client').textContent = project.client;

      // Load project video if available
      if (project.video) {
        const videoContainer = document.createElement('div');
        videoContainer.className = 'project-video';
        
        const videoElement = document.createElement('video');
        videoElement.controls = true;
        videoElement.playsInline = true;
        videoElement.className = 'video-player';
        
        const source = document.createElement('source');
        source.src = project.video;
        source.type = 'video/mp4'; 
        
        videoElement.appendChild(source);
        videoContainer.appendChild(videoElement);
        
        // Add video before images
        const imagesContainer = document.getElementById('project-images');
        imagesContainer.parentNode.insertBefore(videoContainer, imagesContainer);
      }
      
      // Load project images
      const imagesContainer = document.getElementById('project-images');
      imagesContainer.innerHTML = '';
      
      project.images.forEach(imageUrl => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = project.title;
        imagesContainer.appendChild(imgElement);
      });
    } else {
      // Redirect to work page if project not found
      window.location.href = 'work.html';
    }
  }
  
  // Initialize
  document.addEventListener('DOMContentLoaded', loadProjectData);