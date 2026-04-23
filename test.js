// Simple Interaction: Change Active Tab
const tabs = document.querySelectorAll('.side-nav li');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        console.log(`Navigating to ${tab.innerText}`);
    });
});

// Simple Follower Logic
const visitBtn = document.querySelector('.btn-visit');
visitBtn.addEventListener('click', () => {
    alert("Redirecting to company website...");
});