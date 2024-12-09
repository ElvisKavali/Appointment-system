let appointments = [];

function bookAppointment(doctorName, specialty) {
    const appointmentDate = prompt("Enter appointment date (e.g., YYYY-MM-DD):");
    if (appointmentDate) {
        const appointment = {
            doctor: doctorName,
            specialty: specialty,
            date: appointmentDate
        };
        appointments.push(appointment);
        displayAppointments();
    }
}

function displayAppointments() {
    const appointmentsList = document.getElementById('appointments');
    appointmentsList.innerHTML = '';

    if (appointments.length === 0) {
        appointmentsList.innerHTML = '<li>No appointments booked.</li>';
        return;
    }

    appointments.forEach(appointment => {
        const listItem = document.createElement('li');
        listItem.textContent = `${appointment.date} - ${appointment.doctor} (${appointment.specialty})`;
        appointmentsList.appendChild(listItem);
    });
}
