export function convertToPersian(value){
    switch(value)
    {
        case"action":
            return "اکشن";

        case "animation":
            return "انيميشن";

        case"comedy":
        return"کمدی";

        case"documentary":
        return"مستند";

        case"drama":
        return"عاشقانه";

        case"family":
        return"خانوادگی";

        case"historical":
        return"تاریخی";

        case"horrific":
        return"وحشت";

        case"imaginary":
        return"علمی تخیلی";

        case "movies":
            return"فیلم";
        case "series":
            return "سریال";
        case "all":
            return "همه"

    }
}

const numbers = {
    0: "۰", 
    1: "۱", 
    2: "۲", 
    3: "۳", 
    4: "۴", 
    5: "۵", 
    6: "۶", 
    7: "۷", 
    8: "۸", 
    9: "۹",
}

export function convertNumberToPersian(number){
    number = number.toString().split(""); //split makes an array
    let persianNumber = "";
    for (let i = 0; i < number.length; i++) {
        number[i] = numbers[number[i]];
    }
    for (let i = 0; i < number.length; i++) {
            persianNumber += number[i];
    }
    return persianNumber;
}