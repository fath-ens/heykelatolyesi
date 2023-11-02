// Başlığa tıklama olayını dinleyin
document.getElementById("scroll-heading").addEventListener("click", function() {
    // Hedef bölümün yüksekliğini alın
    const targetSection = document.getElementById("target-section");
    const targetSectionHeight = targetSection.getBoundingClientRect().top;

    // Sayfayı hedef bölüme kaydırın
    window.scrollTo({
        top: targetSectionHeight,
        behavior: "smooth" // Yavaşça kaydır
    });
});

document.getElementById("contract").addEventListener("click", function() {
    // Hedef bölümün yüksekliğini alın
    const targetSection = document.getElementById("target-contract");
    const targetSectionHeight = targetSection.getBoundingClientRect().top;

    // Sayfayı hedef bölüme kaydırın
    window.scrollTo({
        top: targetSectionHeight,
        behavior: "smooth" // Yavaşça kaydır
    });
});