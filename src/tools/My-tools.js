// eslint-disable-next-line

const checkError = (data) => {

    for (let element in data) {





        switch (element) {

            case 'name':
                // eslint-disable-next-line
                if (! /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data[element])) {

                    return " nombre solo puede contener letras ";
                }
                break;

            case 'surname':
                // eslint-disable-next-line
                if (! /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data[element])) {

                    return " Apellidos solo pueden contener letras  ";

                }

            break;

            case 'username':
                // eslint-disable-next-line
                if (! /^(?=.{6,16}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(data[element])) {
                    return 'min 6 caracteres ,solo acepta - y _'
                }
            break;

            case 'email':
                // eslint-disable-next-line
                if (! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(data[element])) {

                    return 'Por favor escriba un email válido.'
                } 
            break;

            case 'password':
                // eslint-disable-next-line
                if (data[element] === '') {
                    return 'Por favor escriba su contraseña.';
                }
                // eslint-disable-next-line
                if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(data[element])){
                    return 'Contraseña no valida ,min 8 caraterers 1 letra y 1 caracter especial, '
                }
            break;

            case 'passwordTwo': 
                if (data.passwordOne !== data.passwordTwo) {
                    return 'Las contraseñas deben ser iguales'
                }
            break;

            case 'phone' : 

                // eslint-disable-next-line
                if(! /^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}.text(data[element])/){

                    return "El telefono introducido solo puede contener números";
                }
            break;

            case 'address':
                // eslint-disable-next-line
                if (! /^[#.0-9a-zA-Z\s,-\\ñÑ]+$/.test(data[element])) {
                    return 'caracteres especiales :solos se permiten  "-" ; "." ;"," '
                } 
            break;

            default:
            
            break;
        }
    }
};

export default checkError;