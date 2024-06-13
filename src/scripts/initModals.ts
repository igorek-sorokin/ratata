export function initModals() {
    const wrapper = document.getElementById("body-el");
    var formModal = document.getElementById("formModal");
    var paymentForm = document.getElementById("paymentFormModal");
    var certificateForm = document.getElementById("certificateFormModal");

    var btns = document.querySelectorAll(".open-modal-js");
    var btnsPayment = document.querySelectorAll(".open-payment-modal-js");
    var btnsCertificate = document.querySelectorAll(".open-certificate-modal-js");


    var formModalClose: HTMLElement = document.getElementById(
        "formModalClose"
    ) as HTMLElement;

    var paymentFormClose: HTMLElement = document.getElementById(
        "paymentFormClose"
    ) as HTMLElement;

    var certificateFormClose: HTMLElement = document.getElementById(
        "certificateFormClose"
    ) as HTMLElement;

    const programSelect = document.getElementById('program-select') as HTMLSelectElement;

    btns.forEach((btn: HTMLElement) => {
        btn.onclick = function () {
            const programs = ['Safety', 'Skill', 'Drift', 'Sport'];
            programs.forEach(program => {
                if (btn.classList.contains(program.toLowerCase())) {
                    programSelect.value = program;
                }
            });
            formModal.style.display = "flex";
            wrapper.style.height = '100vh';
            wrapper.style.overflowY = 'hidden';
        };
    });


    btnsPayment.forEach((btn: HTMLElement) => {
        btn.onclick = function () {
            paymentForm.style.display = "flex";
            wrapper.style.height = '100vh';
            wrapper.style.overflowY = 'hidden';
        };
    });

    btnsCertificate.forEach((btn: HTMLElement) => {
        btn.onclick = function () {
            certificateForm.style.display = "flex";
            wrapper.style.height = '100vh';
            wrapper.style.overflowY = 'hidden';
        };
    });

    formModalClose.onclick = function () {
        formModal.style.display = "none";
        wrapper.style.overflowY = 'inherit';
        wrapper.style.height = 'inherit';
    };

    paymentFormClose.onclick = function () {
        paymentForm.style.display = "none";
        wrapper.style.overflowY = 'inherit';
        wrapper.style.height = 'inherit';
    };

    certificateFormClose.onclick = function () {
        certificateForm.style.display = "none";
        wrapper.style.overflowY = 'inherit';
        wrapper.style.height = 'inherit';
    };

    if (window.location.hash && window.location.hash === '#pay_form') {
        paymentForm.style.display = "flex";
    }

    if (window.location.hash.includes('#payment_success')) {
        toastr.success('Оплата прошла успешно')
    }

    if (window.location.hash.includes('#payment_error')) {
        toastr.error('Платеж отклонен')
    }

    if (window.location.hash && window.location.hash === '#send_form') {
        formModal.style.display = "flex";
    }
}