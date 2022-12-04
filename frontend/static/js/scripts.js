const checkbox = document.getElementById('checkbox');

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
document.documentElement.setAttribute('data-theme', storedTheme)


checkbox.addEventListener('change', () => {
    // change theme of website
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";
    
    if (currentTheme === "light") {
        targetTheme = "dark";
    }
    
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
});

function copyToClip(msg) {
    navigator.clipboard.writeText(msg).then(() => {
      alert(`${msg} successfully copied to clipboard`);
    }, () => {
      alert(`${msg} failed to copy to clipboard`)
    });
}



console.log('js loaded');