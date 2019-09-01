import swal from 'sweetalert2';

const Swal = {
    success : (message) => (
        swal.fire(
            'Good job!',
            message,
            'success'
          )
    ),
    failed : (message) => (
        swal.fire({
            type: 'error',
            title: 'Oops...',
            text: message,
          })
    )
}

export default Swal
