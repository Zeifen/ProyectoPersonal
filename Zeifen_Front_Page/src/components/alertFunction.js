import Swal from 'sweetalert2';
import { alertConst } from '../constants/generalConstants';

//General Alert
export const alertFunction = (title, text, icon, confirmButtonText) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: confirmButtonText
  });
}

//Loading Alert
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

//Canceled/Success Pass Alert
export const alertBasic = (title, text, icon) => {
    Swal.fire({
    title: title,
    text: text,
    icon: icon
  });
}

//Re-confirm Alert, única alert con constantes, solo se usa en un apartado JS
export async function showPassword() {
  const { value: password } = await Swal.fire({
    title: alertConst.titlePass,
    input: alertConst.inputPass,
    inputLabel: alertConst.inputLabelNewPass,
    inputPlaceholder: alertConst.inputPlaceholderPass,
    confirmButtonText: alertConst.confirmButtonText,
    cancelButtonText: alertConst.cancelButtonText,
    inputAttributes: {
      maxlength: alertConst.maxlength,
      autocapitalize: alertConst.autoOff,
      autocorrect: alertConst.autoOff,
    },
    showCancelButton: true,

  });
  return password;
}