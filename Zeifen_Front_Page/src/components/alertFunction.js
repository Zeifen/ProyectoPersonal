import Swal from 'sweetalert2';

export const alertFunction = (title, text, icon, confirmButtonText) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: confirmButtonText
    });
}

export const alertLoading = (title, text) => {
    Swal.fire({
    title: title,
    text: text,
    allowOutsideClick: false,
    didOpen: () => {
        Swal.showLoading();
        }
    });
}