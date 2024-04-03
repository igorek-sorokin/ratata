import React, { useState} from 'react';
import toastr from 'toastr'
import Inputmask from "inputmask";
import { getTrafficSource } from '../scripts/getTrafficSource';

const CertificateForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        tel: '',
        email: '',
    });

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        if (name === 'tel') {
            const numberPattern = /^\d*$/;
            if (!numberPattern.test(value)) {
                value = value.replace(/\D/g, '');
            }
            if (value.length > 20) {
                value = value.slice(0, 20);
            }
        }
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const wrapper = document.getElementById("body-el");
        const modal = document.getElementById("certificateFormModal");
        const data = new URLSearchParams();
        data.append("name", formData.name);
        data.append("tel", formData.tel);
        data.append("email", formData.email);
        data.append("program", "certificate");
        data.append('source', 'ratata');
        data.append('trafficSource', getTrafficSource());

        fetch('https://autopragmat.ru/api/v1/send-order/', {
            method: 'POST',
            body: data,
        }).then(() => {
            toastr.success("Заявка успешно отправлена");
            modal.style.display = "none";
            wrapper.style.overflowY = 'inherit';
            e.target.reset();
        }).catch(() => {
            toastr.error("Произошла ошибка");
        });
    };

    // Apply input mask to phone number field
    Inputmask().mask(document.getElementById("tel"));

    return (
        <div className="md:max-w-2xl mx-auto bg-white px-2 py-8 xs:px-6 md:px-16 md:py-12 text-styles">
            <h1>Оставьте заявку на сертификат</h1>
            <p className="text-sm text-secondary mb-5">
                Время ответа на заявку может составить более 7 дней. Приносим
                извинения за столь долгое ожидание.
            </p>
            <form className="flex flex-col gap-5" onSubmit={handleFormSubmit}>
                <div className="flex flex-col gap-3">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Как к вам обращаться"
                        className="form__input form__input--name"

                    />
                    <input
                        type="tel"
                        name="tel"
                        value={formData.tel}
                        onChange={handleInputChange}
                        required
                        placeholder="Телефон"
                        id="tel"
                        className="form__input form__input--tel"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Электронная почта"
                        className="form__input form__input--email"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <button
                        type="submit"
                        className="text-sm bg-accent text-white flex justify-center items-center h-[60px] min-w-[300px] xl:min-w-[350px] transition hover:shadow-button hover:shadow-accent"
                    >
                        Свяжитесь со мной
                    </button>
                    <span className="text-sm text-secondary">
                        Оставляя заявку, я настоящим соглашаюсь <br /> с&nbsp;
                        <a className="text-accent underline" href="/privacy/">
                            Политикой&nbsp;оператора в&nbsp;отношении обработки персональных данных
                        </a>
                        и&nbsp;
                        <a className="text-accent underline" href="/agreement/">
                            Пользовательским соглашением
                        </a>
                    </span>
                </div>
            </form>
        </div>
    );
};
export default CertificateForm;