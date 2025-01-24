document.addEventListener('DOMContentLoaded', function() {
    const carYes = document.getElementById('car-yes');
    const carNo = document.getElementById('car-no');
    const carDetails = document.getElementById('car-details');
    const noCarDetails = document.getElementById('no-car-details');

    carYes.addEventListener('change', function() {
        if (carYes.checked) {
            carDetails.style.display = 'block';
            noCarDetails.style.display = 'none';
        }
    });

    carNo.addEventListener('change', function() {
        if (carNo.checked) {
            carDetails.style.display = 'none';
            noCarDetails.style.display = 'block';
        }
    });
});


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Submission is closed.');
});
