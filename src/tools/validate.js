import validateSpanishID from './validate-spanish-id';

export default function validate(fields, context = 'register') {
    let errors = {};
    if (context=='login')
    for (let key in fields) {
        switch (key) {
            case 'email':
                if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(fields[key]) )
                errors[key] = {status: 'error', help: 'Por favor escriba un email válido.'};
            break;
            case 'password':
                if(fields[key] == '')
                errors[key] = {status: 'error', help: 'Por favor escriba su contraseña.'};
            break;
        }
    }
    else
    for (let key in fields) {
        switch (key) {
            case 'email':
                if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(fields[key]) )
                    errors[key] = {status: 'error', help: 'Por favor escriba un email válido.'};
            break;
            case 'name' :
                if(! /^[a-zA-Z\u00C0-\u00FF]+(([',. -][a-zA-Z\u00C0-\u00FF ])?[a-zA-Z\u00C0-\u00FF]*)*$/.test(fields[key]))
                    errors[key] = {status: 'error', help: 'Solo se admiten letras en el campo Nombre.'};
            break;
            case 'lastname' :
                if(! /^[a-zA-Z\u00C0-\u00FF]+(([',. -][a-zA-Z\u00C0-\u00FF ])?[a-zA-Z\u00C0-\u00FF]*)*$/.test(fields[key]))
                    errors[key] = {status: 'error', help: 'Solo se admiten letras en el campo Apellidos.'};
            break;
            case 'address':
                if(fields[key] == '')
                errors[key] = {status: 'error', help: 'Por favor proporcione su dirección.'};
            break;
            case 'phone' :
                if(! /^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/.test(fields[key])
                    && ! /^(\+34|0034|34)?[ -]*(8|9)[ -]*([0-9][ -]*){8}/.test(fields[key]))
                    errors[key] = {status: 'error', help: 'Por favor proporcione un teléfono fijo o móvil español válido.'};
            break;
            case 'born' :
                if(! /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/.test(fields[key])
                    /*&& ! /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(fields[key])*/)
                    errors[key] = {status: 'error', help: 'Por favor escriba una fecha del tipo 1990-10-22.'};
            break;
            case 'nif' :
                if(!validateSpanishID(fields[key])?.valid)
                    errors[key] = {status: 'error', help: 'Por favor proporcione un NIF, NIE o CIF válido.'};
            break;
            case 'password' :
                if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(fields[key]))
                    errors[key] = {status: 'error', help: 'La contraseña debe contener como mínimo 8 caracteres, mayúsculas, minúsculas, un número y algún caracter especial.'};
            break;
            case 'passwordValidation' :
                if(fields[key] == '' || fields[key] != fields.password)
                    errors[key] = {status: 'error', help: 'La contraseña no coincide con la original.'};
            break;
        }
    }
    return errors;
}