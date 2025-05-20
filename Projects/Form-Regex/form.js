// Regular Expressions to Validate form fields

// Get form and success message elements
const form = document.getElementById('validateForm')
const successMessage = document.getElementById('successMessage')

// Regular Expressions for different validations
const regexPatterns = {
    // Name: Letters and space only
    name: /^[A-Za-z\s]+$/,

    // Username: 4-16 characters, letters, numbers, underscore
    username: /^[A-Za-z0-9_]{4,16}$/,

    // Email: standard email format
    email: /^[A-Za-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

    // Phone: XXX-XXX-XXXX format
    phone: /^\d{3}-\d{3}-\d{4}$/,

    // Zip Code: 5 digits
    zipcode: /^\d{5}$/,

    // Date: MM/DD/YYYY format

    date: /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/,

    // Credit Card: 16 digits, optional spaces or dashes
    creditcard: /^(\d{4}[- ]?){3}\d{4}$|^\d{16}$/
} 

// function to validate a field

function validateField(field, regex) {

    // Add null check

    if (!field) {
        console.error(`Field with ID ${field.id} not found`)
    }

    const value = field.value.trim();
    const errorElement = document.getElementById(`${field.id}Error`)
    console.log(field.id)

    if (!errorElement) {
        console.error(`Error Element for ${field.id} not found`)
    }

    // Test the value against the regex pattern
    const isValid = regex.test(value);
    if (isValid) {
        errorElement.style.display = 'none'
    }
    else {
        errorElement.style.display = 'block'
    }

    return isValid
}

// function handleSubmit

function handleSubmit(event) {
    event.preventDefault();

    // Track if all validation passes
    let isFormValid = true;

    // Validate each field

    for (const fieldId in regexPatterns) {
        const field = document.getElementById(fieldId)
        const isValid = validateField(field, regexPatterns[fieldId])

        // If any field is invalid, mark the form as invalid

        if (!isValid && field.value.trim !== '') {
            isFormValid = false
        }
    } // end of for... in loop

    // show success message if all validations pass

    if (isFormValid) {
        successMessage.style.display = 'block'
    }

    else {
        successMessage.style.display = 'none'
    }

}


// AddEventListener for button

form.addEventListener('submit', handleSubmit);

// Add input event listerners to al lfields for real-time validations

for (const fieldId in regexPatterns) {
    const field= document.getElementById (fieldId)
    field.addEventListener('input', function() {
        validateField(this, regexPatterns[fieldId])
    })
}
