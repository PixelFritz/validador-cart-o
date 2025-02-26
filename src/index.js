    function validateCreditCardNumber(cardNumber) {
        // Remove all non-digit characters
        const sanitizedCardNumber = cardNumber.replace(/\D/g, '');

        // Define regex patterns for different card issuers
        const cardPatterns = {
            visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            mastercard: /^5[1-5][0-9]{14}$/,
            amex: /^3[47][0-9]{13}$/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
            aura: /^50[0-9]{14,17}$/,
            hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
            elo: /^((636368)|(438935)|(504175)|(451416)|(636297)|(5067)|(4576)|(4011))\d+$/,
            voyager: /^8699[0-9]{11}$/,
            enroute: /^(2014|2149)\d{11}$/
        };

        // Check the card number against each pattern
        for (const [issuer, pattern] of Object.entries(cardPatterns)) {
            if (pattern.test(sanitizedCardNumber)) {
                return {
                    isValid: true,
                    bandeira: issuer
                };
            }
        }

        // If no pattern matches, the card number is invalid
        return {
            isValid: false,
            bandeira: null
        };
    }

    function luhnAlgorithm(cardNumber) {
        // Implement the Luhn algorithm to validate the card number
        let sum = 0;
        let shouldDouble = false;
        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let digit = parseInt(cardNumber.charAt(i));
            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) digit -= 9;
            }
            sum += digit;
            shouldDouble = !shouldDouble;
        }
        return sum % 10 === 0;
    }

    function validateCreditCard(cardNumber) {
        if (luhnAlgorithm(cardNumber)) {
            return validateCreditCardNumber(cardNumber);
        } else {
            return {
                isValid: false,
                bandeira: null
            };
        }
    }

    const cardInfo = validateCreditCard('869962733640222');
    console.log(cardInfo); // { isValid: true, bandeira: 'voyager' }