const es = "Spanish"
const de = "German"
const fr = "French"
const enTranslated = "Hello World"
const esTranslated = "Hola Mundo"
const deTranslated = "Hallo Welt"
const frTranslated = "Bonjour le monde"
let langCode = prompt("Please enter one of the following language codes: es, de, en, or fr")
if (langCode == "es") {
    document.write(enTranslated + " translated into " + es + " is: "+ esTranslated)
} else if (langCode == "de") {
    document.write(enTranslated + " translated into " + de + " is: "+ deTranslated)
} else if (langCode == "fr") {
    document.write(enTranslated + " translated into " + fr + " is: "+ frTranslated)
} else {
    document.write(enTranslated)
}
