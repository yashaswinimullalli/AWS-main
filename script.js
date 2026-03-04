// Initialize Lucide Icons
lucide.createIcons();

// Configuration for deployment URLs
const DEPLOYMENT_URLS = {
    patient: "https://preetham-bharadwaj.github.io/AWS-AI-For-Bharath/",
    hospital: "https://siddesh-g-h.github.io/Hospital-dashboard/"
};

// Button Click Event Listeners
document.getElementById('patientBtn').onclick = () => { 
    window.open(DEPLOYMENT_URLS.patient, '_blank'); 
};

document.getElementById('hospitalBtn').onclick = () => { 
    window.open(DEPLOYMENT_URLS.hospital, '_blank'); 
};

// Optional: Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = "rgba(255, 255, 255, 0.8)";
        nav.style.top = "10px";
    } else {
        nav.style.background = "rgba(255, 255, 255, 0.4)";
        nav.style.top = "20px";
    }
});