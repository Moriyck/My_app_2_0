export const requiredField = value => {
    if (value) return undefined
    return "Field required"
}

export const ruleWritingCreator = (ruleWriting) => (value) => {
    if (!ruleWriting.test(value)) return `Name must begin with a lowercase letter (a-z), Lowercase characters (a-z), Digits (0-9), Any of the characters _, $, (, ), +, -, and /!!!`
    return undefined
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `The maximum length must be ${maxLength} characters!!!`
    return undefined
}

export const minLengthCreator = (minLength) => (value) => {
    if (value.length < minLength) return `The minimum length must be ${minLength} characters!!!`
    return undefined
}