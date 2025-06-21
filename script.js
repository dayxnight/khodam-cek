async function cekKhodam() {
    const nameInput = document.getElementById('nameInput').value;
    if (!nameInput) {
        Swal.fire({
            title: 'GAK BOLEH KOSONG!😡',
            icon: 'error',
            confirmButtonText: 'OK'
        });
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
            document.getElementById('result').style.display = 'block';
        } catch (err) {
            Swal.fire({
                title: 'Gagal memuat data!',
                text: 'Pastikan file khodam.json sudah ada.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
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
    document.getElementById('popupMessage').innerText = message;
    document.getElementById('customPopup').style.display = 'flex';
}
function closePopup() {
    document.getElementById('customPopup').style.display = 'none';
}