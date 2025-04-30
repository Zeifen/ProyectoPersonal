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

export async function showPassword() {
    const { value: password } = await Swal.fire({
      title: 'Cambia tu contraseña',
      input: 'password',
      inputLabel: 'Nueva contraseña',
      inputPlaceholder: 'Ingresa tu nueva contraseña',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      inputAttributes: {
        maxlength: '100',
        autocapitalize: 'off',
        autocorrect: 'off',
      },
      showCancelButton: true,

    });
    return password; 
  }
