function showDocumentInfo() {
    const currentYear = document.getElementById("currentyear");
    const lastModified = document.getElementById("lastModified");
   
    if (currentYear && lastModified) {
      currentYear.innerText = new Date().getFullYear();
      lastModified.innerText = "Last modified: " + document.lastModified;
    }
   }
   
   function toggleContent(target) {
    const myProfile = document.querySelector('.my-profile');
    const myCountry = document.querySelector('.my-country');
    const siblingContents = document.querySelectorAll('.card-content:not(.my-profile, .my-country)');
   
    siblingContents.forEach(content => content.style.display = 'none');
    myProfile.style.display = target === 'my-profile' ? 'block' : 'none';
    myCountry.style.display = target === 'my-country' ? 'block' : 'none';
   }
   
   function handleTitleClick(event) {
    const titles = document.querySelectorAll('.card-title');
    const targetId = event.target.dataset.target;
   
    titles.forEach(title => title.classList.remove('active'));
    event.target.classList.add('active');
   
    toggleContent(targetId);
   }
   
   function init() {
    showDocumentInfo();
   
    const titles = document.querySelectorAll('.card-title');
   
    titles.forEach(title => {
      title.addEventListener('click', handleTitleClick);
    });
   
    toggleContent('my-profile');
   }
   
   document.addEventListener('DOMContentLoaded', init);