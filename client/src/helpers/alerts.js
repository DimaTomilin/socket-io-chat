import Swal from 'sweetalert2';

export const alert = (errorText) =>
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: errorText,
  });

export const successAlert = (message) =>
  Swal.fire({
    icon: 'success',
    title: message,
  });

export const confirmAlert = () =>
  Swal.fire({
    title: 'Are you sure you want to delete this ticket?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
    } else return 'Don`t delete';
  });
