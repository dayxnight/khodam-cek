async function cekKhodam() {
    const nameInput = document.getElementById('nameInput').value;
    if (!nameInput) {
        showPopup('GAK BOLEH KOSONG!😡');
        return;
    }
    document.getElementById('loading').style.display = 'block';

    setTimeout(async () => {
        try {
            const response = await fetch('khodam.json');
            const khodams = await response.json();
            const khodam = khodams[Math.floor(Math.random() * khodams.length)];

            document.getElementById('khodamName').innerHTML = `Khodam: <span>${khodam.name}</span>`;
            document.getElementById('khodamMeaning').innerText = khodam.meaning;
            document.getElementById('result').style.display = 'flex';
        } catch (err) {
            showPopup('Gagal memuat data! Pastikan file khodam.json sudah ada dan valid.');
        } finally {
            document.getElementById('loading').style.display = 'none';
        }
    }, 2000);
}

function resetForm() {
    document.getElementById('nameInput').value = '';
    document.getElementById('result').style.display = 'none';
}
function showPopup(message) {
    const popup = document.getElementById('customPopup');
    document.getElementById('popupMessage').innerText = message;
    popup.classList.add('show');
    // Paksa reflow supaya animasi transition berjalan (untuk display: flex)
    void popup.offsetWidth; // trigger reflow
    setTimeout(() => {
        popup.querySelector('.popup-content').style.opacity = '1';
        popup.querySelector('.popup-content').style.transform = 'translateY(0) scale(1)';
    }, 10);
}
function closePopup() {
    const popup = document.getElementById('customPopup');
    popup.querySelector('.popup-content').style.opacity = '0';
    popup.querySelector('.popup-content').style.transform = 'translateY(-30px) scale(0.96)';
    setTimeout(() => {
        popup.classList.remove('show');
    }, 250);
}