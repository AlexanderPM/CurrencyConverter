//Импортируем флаги стран
import Australia from '../../../../flat_ico/au.ico' // Австралийский доллар
import Azerbaijan from '../../../../flat_ico/az.ico' // Азербайджанский манат
import GreatBritain from '../../../../flat_ico/uk.ico' // Великобритания
import Armenia from '../../../../flat_ico/am.ico' // Армения
import Byelorussia from '../../../../flat_ico/by_.ico' // Беларусь
import Bulgaria from '../../../../flat_ico/bg.ico' // Болгария
import Brazil from '../../../../flat_ico/bv.ico' // Бразилия
import Hungary from '../../../../flat_ico/hu.ico' // Венгрия
import HongKong from '../../../../flat_ico/hk.ico' // Гонконг
import Denmark from '../../../../flat_ico/dk.ico' // Дания
import Usa from '../../../../flat_ico/us.ico' // США
import Euro from '../../../../flat_ico/eu.ico' // ЕВРО
import India from '../../../../flat_ico/in.ico' // Индия
import Kazakhstan from '../../../../flat_ico/kz.ico' // Казахстан
import Canada from '../../../../flat_ico/ca.ico' // Канада
import Kyrgyzstan from '../../../../flat_ico/kg.ico' // Киргизия
import China from '../../../../flat_ico/cn.ico' // Китай
import Moldavia from '../../../../flat_ico/md.ico' // Молдавия
import Norway from '../../../../flat_ico/no.ico' // Норвегия
import Poland from '../../../../flat_ico/pl.ico' // Польша
import Romania from '../../../../flat_ico/ro.ico' // Румыния
import Singapore from '../../../../flat_ico/sg.ico' // Сингапур
import Tajikistan from '../../../../flat_ico/tg.ico' // Таджикистан
import Turkey from '../../../../flat_ico/tr.ico' // Турция
import Turkmenistan from '../../../../flat_ico/tu.ico' // Туркмения
import Uzbekistan from '../../../../flat_ico/uz.ico' // Узбекистан
import Ukraine from '../../../../flat_ico/ua.ico' // Украина
import CzechRepublic from '../../../../flat_ico/cz.ico' // Чехия
import Sweden from '../../../../flat_ico/se.ico' // Швеция
import Switzerland from '../../../../flat_ico/ch.ico' // Швейцария
import SouthAfrica from '../../../../flat_ico/za.ico' // Южно-Африканская Республика
import Korea from '../../../../flat_ico/kr.ico' // Корея
import Japan from '../../../../flat_ico/jp.ico' // Япония
import Mvf from '../../../../flat_ico/mvf.png' // МВФ
import Rub from '../../../../flat_ico/ru.ico' // Россия


//Получаем иконки стран
export const getFlag = (nameCountry) => {
    switch (nameCountry) {
        case "Австралийский доллар":
            return Australia
        case "Азербайджанский манат":
            return Azerbaijan
        case "Фунт стерлингов Соединенного королевства":
            return GreatBritain
        case "Армянских драмов":
            return Armenia
        case "Белорусский рубль":
            return Byelorussia
        case "Болгарский лев":
            return Bulgaria
        case "Бразильский реал":
            return Brazil
        case "Венгерских форинтов":
            return Hungary
        case "Гонконгских долларов":
            return HongKong
        case "Датская крона":
            return Denmark
        case "Доллар США":
            return Usa
        case "Евро":
            return Euro
        case "Индийских рупий":
            return India
        case "Казахстанских тенге":
            return Kazakhstan
        case "Канадский доллар":
            return Canada
        case "Киргизских сомов":
            return Kyrgyzstan
        case "Китайский юань":
            return China
        case "Молдавских леев":
            return Moldavia
        case "Норвежских крон":
            return Norway
        case "Польский злотый":
            return Poland
        case "Румынский лей":
            return Romania
        case "Сингапурский доллар":
            return Singapore
        case "Таджикских сомони":
            return Tajikistan
        case "Турецких лир":
            return Turkey
        case "Новый туркменский манат":
            return Turkmenistan
        case "Узбекских сумов":
            return Uzbekistan
        case "Украинских гривен":
            return Ukraine
        case "Чешских крон":
            return CzechRepublic
        case "Шведских крон":
            return Sweden
        case "Швейцарский франк":
            return Switzerland
        case "Южноафриканских рэндов":
            return SouthAfrica
        case "Вон Республики Корея":
            return Korea
        case "Японских иен":
            return Japan
        case "СДР (специальные права заимствования)":
            return Mvf
        case "Российский рубль":
            return Rub
        case "Армянский драм":
            return Armenia
        case "Венгерский форинт":
            return Hungary
        case "Гонконгский доллар":
            return HongKong
        case "Индийская рупия":
            return India
        case "Казахстанский тенге":
            return Kazakhstan
        case "Киргизский сом":
            return Kyrgyzstan
        case "Молдавский лей":
            return Moldavia
        case "Норвежская крона":
            return Norway
        case "Таджикский сомони":
            return Tajikistan
        case "Турецкая лира":
            return Turkey
        case "Узбекский сум":
            return Uzbekistan
        case "Украинская гривна":
            return Ukraine
        case "Чешская крона":
            return CzechRepublic
        case "Шведская крона":
            return Sweden
        case "Южноафриканский рэнд":
            return SouthAfrica
        case "Японская иена":
            return Japan
        case "Южнокорейская вона":
            return Korea
        default:
            return "";
    }
}
//Исправляем названия с множественного числа на единственное
export const getValidName = (nameCountry) => {
    switch (nameCountry) {

        case "Армянских драмов":
            return "Армянский драм"
        case "Венгерских форинтов":
            return "Венгерский форинт"
        case "Гонконгских долларов":
            return "Гонконгский доллар"
        case "Индийских рупий":
            return "Индийская рупия"
        case "Казахстанских тенге":
            return "Казахстанский тенге"
        case "Киргизских сомов":
            return "Киргизский сом"
        case "Молдавских леев":
            return "Молдавский лей"
        case "Норвежских крон":
            return "Норвежская крона"
        case "Таджикских сомони":
            return "Таджикский сомони"
        case "Турецких лир":
            return "Турецкая лира"
        case "Узбекских сумов":
            return "Узбекский сум"
        case "Украинских гривен":
            return "Украинская гривна"
        case "Чешских крон":
            return "Чешская крона"
        case "Шведских крон":
            return "Шведская крона"
        case "Южноафриканских рэндов":
            return "Южноафриканский рэнд"
        case "Японских иен":
            return "Японская иена"
        case "Вон Республики Корея":
            return "Южнокорейская вона"
        default:
            return nameCountry;
    }
}