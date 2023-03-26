import "./App.css";
import { useState, useEffect } from "react";
import Cover from ".//Components/Cover.js";
import TimeBlock from ".//Components/TimeBlock";
import FirstBlock from "./Components/FirstBlock";
import LastBlock from ".//Components/LastBlock";
import Footer from ".//Components/Footer";
import useWindowDimensions from ".//Components/dimensions.js";
import { FaAngleUp } from "react-icons/fa";
import VideoBlock from ".//Components/VideoBlock";

function App() {
  const { docHeight } = useWindowDimensions();
  // ------------------------------------------------------------------------------------------------

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > docHeight) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ! ----------------------------------------------------------------
  return (
    <div className='App'>
      <div className='top-to-btm'>
        {" "}
        {showTopBtn && (
          <FaAngleUp className='icon-position icon-style' onClick={goToTop} />
        )}{" "}
      </div>

      <Cover />

      <div className='event-box'>
        <FirstBlock
          lineStyle='maxident-to-bg'
          date='25.03.23'
          picture={require(".//Pictures/250323.jpg")}
          text='Пятая Годовщина с дебюта Stray Kids'
        />

        <VideoBlock
          lineStyle='maxident'
          date='17.02.23'
          text='Чанбин в рекламе SAMSUNG'
          youtubeID='BOoTAzvXH8w'
        />

        <TimeBlock
          lineStyle='maxident'
          date='11.02.23'
          picture={require(".//Pictures/230211.jpg")}
          text='Получение третьего дэсана "Best Performance" на премии HMA 2022'
        />

        <TimeBlock
          lineStyle='maxident'
          date='28.01.23'
          picture={require(".//Pictures/230128.jpg")}
          text='Релиз заглавного трека "THE SOUND" из одноименного первого японского альбома Stray Kids'
        />

        <TimeBlock
          lineStyle='maxident'
          date='21.12.22'
          picture={require(".//Pictures/221221.jpg")}
          text='Релиз специального альбома "SKZ-REPLAY"'
        />
        <TimeBlock
          lineStyle='maxident'
          date='19.12.22'
          picture={require(".//Pictures/221219.jpg")}
          text='Получение второго дэсана "Album of The Year" на премии AAA 2022'
        />

        <VideoBlock
          lineStyle='maxident'
          date='30.11.22'
          text='Коллаб 3RACHA и Tiger JK на MAMA 2022'
          youtubeID='XHmZQC24zuA'
        />

        <TimeBlock
          lineStyle='maxident'
          date='25.10.22'
          picture={require(".//Pictures/221025a.jpg")}
          text='Первая фотосессия Ай Эна в журнале «STAR1» '
        />
        <TimeBlock
          lineStyle='maxident'
          date='25.10.22'
          picture={require(".//Pictures/221025.jpg")}
          text='Stray Kids в журнале Billboard'
        />

        <VideoBlock
          lineStyle='maxident'
          date='18.10.22'
          text='Интервью с щеночками'
          youtubeID='tbN9RJQqi-E'
        />

        <TimeBlock
          lineStyle='maxident'
          date='16.10.22'
          picture={require(".//Pictures/221016.jpg")}
          text='Альбом <MAXIDENT> дебютировал на #1 строчке в чарте Billboard 200'
        />

        <TimeBlock
          lineStyle='maxident'
          date='12.10.22'
          picture={require(".//Pictures/221012.jpg")}
          text='Продажи альбома <MAXIDENT> впервые достигли отметки в 2 миллиона копий'
        />

        <TimeBlock
          lineStyle='maxident-to-oddinary'
          date='07.10.22'
          picture={require(".//Pictures/221007.jpg")}
          text='Релиз седьмого мини-альбома <MAXIDENT>'
        />

        <TimeBlock
          lineStyle='oddinary'
          date='20.09.22'
          picture={require(".//Pictures/220920.jpg")}
          text='Онлайн релиз трека «HEYDAY» для шоу "Street Man Fighter"'
        />

        <TimeBlock
          lineStyle='oddinary'
          date='05.09.22'
          picture={require(".//Pictures/220905.jpg")}
          text='Хёнджин и Феликс посетили мероприятие "YSL Beauty" Event" в Париже'
        />
        <TimeBlock
          lineStyle='oddinary'
          date='19.05.22'
          picture={require(".//Pictures/220519.jpg")}
          text='Открытие первого POP-UP магазина,  "THE VICTORY" в Сеуле'
        />

        <TimeBlock
          lineStyle='oddinary'
          date='29.04.22'
          picture={require(".//Pictures/220429.jpg")}
          text='Начало второго мирового тура "MANIAC"'
        />

        <VideoBlock
          lineStyle='oddinary'
          date='25.06.22'
          text='Участие Феликса в записи песни "NO PROBLEM" Наён из TWICE'
          youtubeID='O-aCT1VvMEM'
        />

        <TimeBlock
          lineStyle='oddinary'
          date='02.04.22'
          picture={require(".//Pictures/220402.jpg")}
          text='Stray Kids становятся моделями бренда одежды BENCH'
        />
        <TimeBlock
          lineStyle='oddinary'
          date='29.03.22
'
          picture={require(".//Pictures/220329.jpg")}
          text='Stray Kids заняли #1 место с альбомом "ODDINARY" в чарте Billboard 200'
        />
        <TimeBlock
          lineStyle='oddinary'
          date='29.03.22
'
          picture={require(".//Pictures/220329(1).jpg")}
          text='Альбом "ODDINARY" превысил 1 миллион продаж по версии чарта Hanteo'
        />
        <TimeBlock
          lineStyle='oddinary'
          date='31.03.22'
          picture={require(".//Pictures/220331.jpg")}
          text='Stray Kids становятся моделями бренда одежды MAHAGRID'
        />
        <VideoBlock
          lineStyle='oddinary'
          date='25.03.22'
          text='Хард пати в ZOOM на 4 годовщину'
          youtubeID='Tw6sG7vXVQ4'
        />
        <TimeBlock
          lineStyle='oddinary-to-christmas'
          date='18.03.22'
          picture={require(".//Pictures/220318.jpg")}
          text='Релиз шестого мини-альбома <ODDINARY>'
        />

        <TimeBlock
          lineStyle='christmas'
          date='27.01.22'
          picture={require(".//Pictures/221027.jpg")}
          text='Первая фотосессия Ли Ноу в журнале "BEAUTY+"'
        />

        <VideoBlock
          lineStyle='christmas'
          date='24.01.22'
          text='Первый эпизод шоу "Two Kids Room"'
          youtubeID='9OkRAef4ejQ'
        />

        <TimeBlock
          lineStyle='christmas'
          date='23.12.21'
          picture={require(".//Pictures/211223.jpg")}
          text='Онлайн релиз специального альбома "SKZ2021"'
        />

        <VideoBlock
          lineStyle='christmas'
          date='11.12.21'
          text='Выступление с "CHEESE" на MAMA 2021'
          youtubeID='P0dRKB3n16E'
        />

        <TimeBlock
          lineStyle='christmas'
          date='02.12.21'
          picture={require(".//Pictures/211202.jpg")}
          text='Получение первого дэсана "Performance of The Year" на премии AAA 2021'
        />

        <TimeBlock
          lineStyle='christmas-to-noeasy'
          date='29.11.21'
          picture={require(".//Pictures/211129.jpg")}
          text='Релиз специального праздничного сингла "Christmas EveL"'
        />

        <TimeBlock
          lineStyle='noeasy'
          date='19.11.21'
          picture={require(".//Pictures/211119.jpg")}
          text='Первая фотосессия Хёнджина в журнале «Marie Claire Korea»'
        />

        <VideoBlock
          lineStyle='noeasy'
          date='31.10.21'
          text='Добро пожаловать в отель SKZ Del Luna!'
          youtubeID='PtjCLT6sMsg'
        />

        <TimeBlock
          lineStyle='noeasy'
          date='28.10.21'
          picture={require(".//Pictures/211028.jpg")}
          text='Коллаб Чанбина с F.HERO и MILLI в "Mirror Mirror"'
        />

        <VideoBlock
          lineStyle='noeasy'
          date='16.10.21'
          text='AOTM Хёнджина с "Motley Crew" в STUDIO CHOOM'
          youtubeID='T-ajHVsMcKk'
        />

        <TimeBlock
          lineStyle='noeasy'
          date='10.10.21'
          picture={require(".//Pictures/211010.jpg")}
          text='Онлайн релиз OST Сынмина "Here Always" для дорамы "Hometown Cha-Cha-Cha"'
        />

        <TimeBlock
          lineStyle='noeasy'
          date='23.09.21'
          picture={require(".//Pictures/210923.jpg")}
          text='Релиз второго японского сингла "Scars"'
        />

        <VideoBlock
          lineStyle='noeasy'
          date='04.09.21'
          text='Выступление 3RACHA со стажерами на шоу "LOUD"'
          youtubeID='Yhb2g3TqiJ8'
        />
        <TimeBlock
          lineStyle='noeasy'
          date='03.09.21'
          picture={require(".//Pictures/210904.jpg")}
          text='Stray Kids становятся моделями бренда косметики NACIFIC'
        />

        <VideoBlock
          lineStyle='noeasy'
          date='26.08.21'
          text="Let's Groove Феликса в TikTok"
          youtubeID='AGMP9AN6GVU'
        />

        <TimeBlock
          lineStyle='noeasy-to-in-life'
          date='23.08.21'
          picture={require(".//Pictures/210823.jpg")}
          text='Релиз клипа на заглавную песню "Thunderous" и первого полноформатного альбома "NOEASY"'
        />

        <TimeBlock
          lineStyle='in-life'
          date='16.07.21'
          picture={require(".//Pictures/210716.jpg")}
          text='Ли Ноу становится ведущим шоу "Show! Music Core"'
        />

        <VideoBlock
          lineStyle='in-life'
          date='10.07.21'
          text='Выход SKZ-PLAYER "Play With Fire" с Хёнджином'
          youtubeID='2bBkSgQisbg'
        />

        <TimeBlock
          lineStyle='in-life'
          date='09.07.21'
          picture={require(".//Pictures/210709.jpg")}
          text='Рыбак Ли Ноу на шоу "City Fisherman 3"'
        />

        <TimeBlock
          lineStyle='in-life'
          date='08.07.21'
          picture={require(".//Pictures/210708.jpg")}
          text='Коллаборация Stray Kids с японским брендом одежды WEGO'
        />

        <VideoBlock
          lineStyle='in-life'
          date='07.07.21'
          text='Выход первого эпизода шоу "SKZ SONG CAMP: Howl in Harmony"'
          youtubeID='zxyOkkPIuPk'
        />

        <TimeBlock
          lineStyle='in-life'
          date='01.07.21'
          picture={require(".//Pictures/210701.jpg")}
          text='🍀'
        />

        <VideoBlock
          lineStyle='in-life'
          date='28.06.21'
          text='Участие Бан Чана в записи кавера Цзыюй на песню “ME! (Taylor Swift)”'
          youtubeID='IO1Nl9ErTsI'
        />

        <TimeBlock
          lineStyle='in-life'
          date='26.06.21'
          picture={require(".//Pictures/210806.jpg")}
          text='Релиз цифрового сингла "Mixtape: 애"'
        />

        <TimeBlock
          lineStyle='in-life'
          date='03.06.21'
          picture={require(".//Pictures/210603.jpg")}
          text='Победа Stray Kids в финале шоу "Kingdom"'
        />
        <TimeBlock
          lineStyle='in-life'
          date='28.05.21'
          picture={require(".//Pictures/210528.jpg")}
          text='Онлайн релиз песни "WOLFGANG" в рамках шоу "Kingdom"'
        />
        <TimeBlock
          lineStyle='in-life'
          date='20.05.21'
          picture={require(".//Pictures/210520.jpg")}
          text='Трансляция восьмого эпизода "NO LIMIT" на шоу "Kingdom"'
        />

        <TimeBlock
          lineStyle='in-life'
          date='04.04.21'
          picture={require(".//Pictures/210520(1).jpg")}
          text='Сотый эпизод "Комнаты Чана" feat 3RACHA'
        />

        <TimeBlock
          lineStyle='in-life'
          date='01.04.21'
          picture={require(".//Pictures/210401.jpg")}
          text='Трансляция первого эпизода шоу "Kingdom"'
        />

        <TimeBlock
          lineStyle='in-life'
          date='18.03.21'
          picture={require(".//Pictures/210318.jpg")}
          text='Релиз песни "Going Dumb" в партнерстве с PUBG и в коллаборации с артистами Alesso & CORSAK'
        />

        <TimeBlock
          lineStyle='in-life'
          date='02.03.21'
          picture={require(".//Pictures/210302.jpg")}
          text='Фотосессия Бан Чана в журнале "MEN’S FOLIO Singapore"'
        />

        <TimeBlock
          lineStyle='in-life'
          date='05.02.21'
          picture={require(".//Pictures/210205.jpg")}
          text='Выпускной Ай Эна'
        />

        <VideoBlock
          lineStyle='in-life'
          date='03.02.21'
          text='Первый эпизод шоу "SKZ-CODE"'
          youtubeID='8VRNpTrDFJs'
        />

        <TimeBlock
          lineStyle='in-life'
          date='31.01.21'
          picture={require(".//Pictures/210131.jpg")}
          text='Stray Kids становятся моделями бренда косметики CLIO'
        />

        <VideoBlock
          lineStyle='in-life'
          date='15.01.21'
          text='Макнэ доказывает, что он на вершине'
          youtubeID='SjKARrJwqzE'
        />

        <TimeBlock
          lineStyle='in-life'
          date='30.12.20'
          picture={require(".//Pictures/201230.jpg")}
          text='Фотосессия Бан Чана, Хёнджина, Хана и Феликса в журнале "ELLE KOREA"'
        />

        <VideoBlock
          lineStyle='in-life'
          date='23.12.20'
          text='Первое появление SKZOO'
          youtubeID='VnVx7QBGGE8'
        />

        <VideoBlock
          lineStyle='in-life'
          date='07.12.20'
          text='Выступление с "Victory Song"'
          youtubeID='SsBtJSVdmhM'
        />

        <TimeBlock
          lineStyle='in-life'
          date='03.12.20'
          picture={require(".//Pictures/201203(1).jpg")}
          text='Клип на "Back Door" достиг 100 миллионов просмотров'
        />

        <TimeBlock
          lineStyle='in-life'
          date='31.11.20'
          picture={require(".//Pictures/201131.jpg")}
          text='Открытие Bubble Stray Kids'
        />

        <TimeBlock
          lineStyle='in-life'
          date='04.11.20'
          picture={require(".//Pictures/201104.jpg")}
          text='Релиз первого японского мини-альбома "ALL IN"'
        />

        <TimeBlock
          lineStyle='in-life'
          date='22.11.20'
          picture={require(".//Pictures/201122.jpg")}
          text='Первый онлайн-концерт "Beyond LIVE Unlock GO LIVE IN LIFE"'
        />

        <TimeBlock
          lineStyle='in-life'
          date='19.10.20'
          picture={require(".//Pictures/201019.jpg")}
          text='Чанбин на шоу "Show Me The Money 9"'
        />

        <TimeBlock
          lineStyle='in-life-to-go-life'
          date='14.09.20'
          picture={require(".//Pictures/200914.jpg")}
          text='Релиз репак-альбома "IN生"'
        />

        <TimeBlock
          lineStyle='go-life'
          date='27.08.20'
          picture={require(".//Pictures/200827.jpg")}
          text='Клип "God`s Menu" достиг 100 миллионов просмотров'
        />

        <TimeBlock
          lineStyle='go-life'
          date='21.08.20'
          picture={require(".//Pictures/200821.jpg")}
          text='Фотосессия Stray Kids в журнале "VOGUE KOREA"'
        />
        <TimeBlock
          lineStyle='go-life'
          date='17.07.20'
          picture={require(".//Pictures/200717.jpg")}
          text='Ай Эн в шоу трот-певцов'
        />

        <VideoBlock
          lineStyle='go-life'
          date='02.07.20'
          text='God`s Menu версия "Lovestay Морской лук" '
          youtubeID='EXK0SxA_PfE'
        />

        <VideoBlock
          lineStyle='go-life'
          date='03.07.20'
          text='Добро пожаловать в ресторан Ли Ноу!'
          youtubeID='qU2cYQfRGik'
        />
        <VideoBlock
          lineStyle='go-life'
          date='16.07.20'
          text='Релиз OST "Hello Stranger" из веб-дорамы "Pop Out Boy"'
          youtubeID='hKvGwo2p4q8'
        />

        <TimeBlock
          lineStyle='go-life'
          date='28.06.20'
          picture={require(".//Pictures/200628.jpg")}
          text='Чанбин на шоу "King of Mask Singer"'
        />

        <VideoBlock
          lineStyle='go-life'
          date='26.06.20'
          text='Хёнджин в кавере на "PSYCHO"'
          youtubeID='4YkNeeUIQPc'
        />
        <VideoBlock
          lineStyle='go-life'
          date='26.06.20'
          text='Первое появление на шоу "THE FIRST TAKE"'
          youtubeID='T7DY0FXJV18'
        />

        <TimeBlock
          lineStyle='go-life-to-levanter'
          date='17.06.20'
          picture={require(".//Pictures/200617.jpg")}
          text='Релиз клипа на заглавную песню "God`s Menu" и первого полноформатного альбома "GO生"'
        />

        <TimeBlock
          lineStyle='levanter'
          date='13.05.20'
          picture={require(".//Pictures/200513.jpg")}
          text='Релиз цифрового сингла "TOP", состоящего из корейских версий опенинга и эндинга к аниме "Tower of God"'
        />

        <VideoBlock
          lineStyle='levanter'
          date='04.05.20'
          text='Первый "SKZ-RECORD" (Сынмин)'
          youtubeID='5FpwF-v8_q0'
        />

        <VideoBlock
          lineStyle='levanter'
          date='25.04.20'
          text='Первая трансляция Феликса'
          youtubeID='nb1eLOSN1xc'
        />
        <VideoBlock
          lineStyle='levanter'
          date='24.03.20'
          text='You know what else is big???'
          youtubeID='tOo_7Pn6wPs'
        />
        <TimeBlock
          lineStyle='levanter'
          date='22.03.20'
          picture={require(".//Pictures/200322.jpg")}
          text='Первая фотосессия Ли Ноу и Хёнджина в журнале "ARENA Homme+ Korea"'
        />

        <VideoBlock
          lineStyle='levanter'
          date='01.04.20'
          text='Пранк над Stray Kids'
          youtubeID='iLV0Z30E-8I'
        />

        <TimeBlock
          lineStyle='levanter'
          date='25.03.20'
          picture={require(".//Pictures/200325.jpg")}
          text='Релиз цифрового сингла "Mixtape : On Track"'
        />

        <TimeBlock
          lineStyle='levanter'
          date='18.03.20'
          picture={require(".//Pictures/200318.jpg")}
          text='Официальный японский дебют с альбомом "SKZ2020"'
        />

        <VideoBlock
          lineStyle='levanter'
          date='19.02.20'
          text='Stray Kids vs Google Translate'
          youtubeID='DIO3vDNtI3k'
        />

        <VideoBlock
          lineStyle='levanter'
          date='14.02.20'
          text='Stray Kids на "Zach Sang Show"'
          youtubeID='TPGJgpWWvJE'
        />

        <VideoBlock
          lineStyle='levanter'
          date='08.02.20'
          text='Первый SKZ-влог (Ай Эн)'
          youtubeID='cq5CHXCvmGM'
        />

        <TimeBlock
          lineStyle='levanter'
          date='24.01.20'
          picture={require(".//Pictures/200224.jpg")}
          text='Первый англоязычный цифровой релиз "Step Out of Clé"'
        />

        <TimeBlock
          lineStyle='levanter'
          date='21.01.20'
          picture={require(".//Pictures/200121.jpg")}
          text='Первая фотосессия Хёнджина и Феликса в журнале "Star1" совместно с косметическим брендом "MISSHA"'
        />

        <TimeBlock
          lineStyle='levanter'
          date='23-24.11.19'
          picture={require(".//Pictures/191123.jpg")}
          text='Мировой тур "District 9 : Unlock" в Сеуле'
        />

        <TimeBlock
          lineStyle='levanter'
          date='26.12.19'
          picture={require(".//Pictures/191226(1).jpg")}
          text='Первая японская фотосессия Stray Kids в журнале "NYLON JAPAN"'
        />

        <TimeBlock
          lineStyle='levanter'
          date='26.12.19'
          picture={require(".//Pictures/191226.jpg")}
          text='Релиз цифрового сингла "Mixtape : Gone Days"'
        />

        <TimeBlock
          lineStyle='levanter-to-yellow-wood'
          date='09.12.19'
          picture={require(".//Pictures/191209.jpg")}
          text='Релиз пятого мини-альбома "Clé: LEVANTER"'
        />

        <VideoBlock
          lineStyle='yellow-wood'
          date='07.12.19'
          text='Кавер "Again & Again" на шоу "Immortal Song"'
          youtubeID='b1DjhiF245U'
        />

        <TimeBlock
          lineStyle='yellow-wood'
          date='29.11.19'
          picture={require(".//Pictures/191129.jpg")}
          text='Релиз первого фотобука "STAY in London"'
        />

        <TimeBlock
          lineStyle='yellow-wood'
          date='23.11.19'
          picture={require(".//Pictures/191123(1).jpg")}
          text='Появление официального лайтстика'
        />

        <VideoBlock
          lineStyle='yellow-wood'
          date='17.11.19'
          text='Выступление с "3rd Eye"'
          youtubeID='XrCG3i7hdz8'
        />

        <VideoBlock
          lineStyle='yellow-wood'
          date='14.11.19'
          text='Релиз клипа "Astronaut"'
          youtubeID='ZnpEBYvgiAU'
        />

        <VideoBlock
          lineStyle='yellow-wood'
          date='07.11.19'
          text='Релиз первого OST Stray Kids "Story That Won`t End (끝나지 않은 이야기)" к дораме "Extraordinary You"'
          youtubeID='0Dk-27B5Uzg'
        />

        <TimeBlock
          lineStyle='yellow-wood'
          date='01.11.19'
          picture={require(".//Pictures/191101.jpg")}
          text='Первая фотосессия Бан Чана в журнале "ARENA Homme+ Korea"'
        />

        <TimeBlock
          lineStyle='yellow-wood'
          date='28.10.19'
          picture={require(".//Pictures/191028.jpg")}
          text='Stray Kids продолжают путь в составе 8 участников'
        />

        <TimeBlock
          lineStyle='yellow-wood'
          date='09.10.19'
          picture={require(".//Pictures/191009.jpg")}
          text='Релиз цифрового сингла "Double Knot"'
        />

        <TimeBlock
          lineStyle='yellow-wood'
          date='30.09.19'
          picture={require(".//Pictures/190930.jpg")}
          text='Анонс мирового тура "District 9 : Unlock". Тур начался 23.11.19 с концерта в Сеуле и завершился 16.02.20 концертом в Лос-Анджелесе'
        />

        <VideoBlock
          lineStyle='yellow-wood'
          date='02.09.19'
          text='Первая трансляция Свинолика'
          youtubeID='yeqCuc2XHYc'
        />

        <TimeBlock
          lineStyle='yellow-wood'
          date='30.08.19'
          picture={require(".//Pictures/190830.jpg")}
          text='Хёнджин просит STAY помочь выбрать ему сережки в Twitter'
        />

        <TimeBlock
          lineStyle='yellow-wood'
          date='04.08.19'
          picture={require(".//Pictures/190805.jpg")}
          text='Концерт в Москве'
        />

        <VideoBlock
          lineStyle='yellow-wood'
          date='02.08.19'
          text='Первая трансляция "Комнаты Ли Ноу"'
          youtubeID='q1GXGc-wnY0'
        />

        <TimeBlock
          lineStyle='yellow-wood'
          date='02.07.19'
          picture={require(".//Pictures/190702(1).jpg")}
          text='Феликс становится ведущим шоу "Pops in Seoul"'
        />
        <TimeBlock
          lineStyle='yellow-wood'
          date='02.07.19'
          picture={require(".//Pictures/190702.jpg")}
          text='Первая реклама на Таймс-сквер'
        />
        <VideoBlock
          lineStyle='yellow-wood'
          date='13.06.19'
          text='Хёнджин и Ай Эн в эпизодической роли дорамы "A-Teen"'
          youtubeID='f71NM472EG0'
        />

        <TimeBlock
          lineStyle='yellow-wood-to-miroh'
          date='19.06.19'
          picture={require(".//Pictures/190619.jpg")}
          text='Релиз репак-альбома "Clé 2 : Yellow Wood"'
        />

        <TimeBlock
          lineStyle='miroh'
          date='08.05.19'
          picture={require(".//Pictures/190508.jpg")}
          text='Первая фотосессия в журнале "1st Look"'
        />

        <TimeBlock
          lineStyle='miroh'
          date='30.04.19'
          picture={require(".//Pictures/190430.jpg")}
          text='Альбом "Clè: Miroh" преодолел отметку в 400 000 проданных копий, став первым альбомом Stray Kids, который достиг этой цифры'
        />

        <TimeBlock
          lineStyle='miroh'
          date='04.04.19'
          picture={require(".//Pictures/190404.jpg")}
          text='Первая победа на музыкальном шоу. Stray Kids взяли свою первую награду на "M COUNTDOWN" c песней "MIROH"'
        />

        <TimeBlock
          lineStyle='miroh'
          date='31.03.19'
          picture={require(".//Pictures/190331.jpg")}
          text='Хан на шоу "King of Mask Singer"'
        />

        <TimeBlock
          lineStyle='miroh-to-you'
          date='25.03.19'
          picture={require(".//Pictures/190325.jpg")}
          text='Релиз четвертого мини-альбома "Clé 1 : MIROH"'
        />

        <TimeBlock
          lineStyle='you'
          date='21.03.19'
          picture={require(".//Pictures/190321.jpg")}
          text='Ведущий SKZ-новостей Сынмин'
        />

        <VideoBlock
          lineStyle='you'
          date='20.03.19'
          text='Первый эпизод шоу "Finding Stray Kids"'
          youtubeID='tP720mgbuGU'
        />

        <VideoBlock
          lineStyle='you'
          date='07.03.19'
          text='Первая трансляция Хана'
          youtubeID='0Vbrye_stFU'
        />

        <TimeBlock
          lineStyle='you'
          date='07.03.19'
          picture={require(".//Pictures/190307.jpg")}
          text='Анонс тура "HI-STAY" в Корее. Начался 15 марта в Пусане и завершился 20 апреля в Сеуле'
        />
        <TimeBlock
          lineStyle='you'
          date='16.02.19'
          picture={require(".//Pictures/190216.jpg")}
          text='Хёнджин становится ведущим шоу "Show! Music Core"'
        />

        <VideoBlock
          lineStyle='you'
          date='20.02.19'
          text='Чанбин принимает участие в записи песни Yoon Jisung'
          youtubeID='fx9XYpwFbKc'
        />

        <TimeBlock
          lineStyle='you'
          date='15.02.19'
          picture={require(".//Pictures/190215.jpg")}
          text='Выпускной Хёнджина'
        />
        <TimeBlock
          lineStyle='you'
          date='14.02.19'
          picture={require(".//Pictures/190214(1).jpg")}
          text='Выпускной Сынмина'
        />

        <TimeBlock
          lineStyle='you'
          date='07.02.19'
          picture={require(".//Pictures/190207.jpg")}
          text='Ли Ноу стал отцом в третий раз'
        />

        <VideoBlock
          lineStyle='you'
          date='03.02.19'
          text='Первая трансляция "Маленькое, но значимое счастье Сынмина"'
          youtubeID='D265gdD-gqM'
        />

        <VideoBlock
          lineStyle='you'
          date='23.01.19'
          text='Первая трансляция "Комната практики Хёнджини"'
          youtubeID='ftpi8l1lqIc'
        />

        <TimeBlock
          lineStyle='you'
          date='19.1.19'
          picture={require(".//Pictures/190119.jpg")}
          text='Начало первого мирового тура [Stray Kids UNVEIL Tour "I am..."] '
        />

        <VideoBlock
          lineStyle='you'
          date='18.01.19'
          text='Первый "STEP OUT"'
          youtubeID='6f3uy8EgJUM'
        />

        <TimeBlock
          lineStyle='you'
          date='17.01.19'
          picture={require(".//Pictures/190117.jpg")}
          text='Ай Эн снял брекеты'
        />

        <VideoBlock
          lineStyle='you'
          date='03.01.19'
          text='Первая трансляция "Школа  щеночка и котёнка"'
          youtubeID='H2Ue4Fc4A5c'
        />

        <VideoBlock
          lineStyle='you'
          date='02.01.19'
          text='Первая "Комната Чани"'
          youtubeID='OBXBkvTwZlY'
        />

        <VideoBlock
          lineStyle='you'
          date='30.12.18'
          text='Первая трансляция "Личная жизнь макнэ"'
          youtubeID='iiYhb1lx4s8'
        />

        <VideoBlock
          lineStyle='you'
          date='25.12.18'
          text='Рождественская трансляция'
          youtubeID='AA39noNHbDA'
        />

        <TimeBlock
          lineStyle='you'
          date='09.12.18'
          picture={require(".//Pictures/181209.jpg")}
          text='YouTube канал Stray Kids преодолел отметку в 1 000 000 подписчиков'
        />
        <TimeBlock
          lineStyle='you'
          date='29.10.18'
          picture={require(".//Pictures/181029.jpg")}
          text='Stray Kids впервые преодолели отметку в 1 000 000 ежемесячных слушателей на Spotify'
        />
        <VideoBlock
          lineStyle='you'
          date='25.10.18'
          text='Позор Stray Kids в караоке'
          youtubeID='HZQBR0fHYKA'
        />
        <TimeBlock
          lineStyle='you'
          date='22.10.18'
          picture={require(".//Pictures/181022.jpg")}
          text='Релиз третьего мини-альбома "I am YOU"'
        />
        <TimeBlock
          lineStyle='you-to-who'
          date='21.10.18'
          picture={require(".//Pictures/181021.jpg")}
          text='Третий шоукейс "Stray Kids UNVEIL [Op. 03 : I Am YOU]"'
        />
        <TimeBlock
          lineStyle='who'
          date='18.10.18'
          picture={require(".//Pictures/181018.jpg")}
          text='Stray Kids становятся моделями спортивного бренда PRO-SPECS'
        />

        <TimeBlock
          lineStyle='who'
          date='30.08.18'
          picture={require(".//Pictures/180830.jpg")}
          text='Первая награда новичков на премии "Soribada Best K-Music Awards"'
        />

        <VideoBlock
          lineStyle='who'
          date='26.08.18'
          text='Первый эпизод "SKZ-PLAYER"'
          youtubeID='XJNP9l6k688'
        />

        <VideoBlock
          lineStyle='who'
          date='21.08.18'
          text='Первое появление в шоу "Idol Room"'
          youtubeID='zLdHZeRLtTs'
        />
        <TimeBlock
          lineStyle='who'
          date='20.09.18'
          picture={require(".//Pictures/180920.jpg")}
          text='Первая фотосессия в журнале "NYLON KOREA"'
        />

        <VideoBlock
          lineStyle='who'
          date='14.08.18'
          text='Первый эпизод шоу "SK-TALKER"'
          youtubeID='wMqZNQvTxXM'
        />

        <TimeBlock
          lineStyle='who'
          date='08.08.18'
          picture={require(".//Pictures/180808.jpg")}
          text='Первое появление на радио (Choi Hwa Jung Power Time)'
        />

        <TimeBlock
          lineStyle='who'
          date='06.08.18'
          picture={require(".//Pictures/180806.jpg")}
          text='Релиз второго мини-альбома "I am WHO"'
        />

        <TimeBlock
          lineStyle='who-to-not'
          date='05.08.18'
          picture={require(".//Pictures/180805.jpg")}
          text='Второй шоукейс "Stray Kids UNVEIL [Op. 02 : I Am WHO]"'
        />

        <VideoBlock
          lineStyle='not'
          date='01.08.18'
          text='День Рождения фандома. Название фандома: STAY'
          youtubeID='hVsG4XhKbYw'
        />

        <TimeBlock
          lineStyle='not'
          date='27.07.18'
          picture={require(".//Pictures/180727.jpg")}
          text='Stray Kids становятся моделями бренда школьной формы IVY Club '
        />
        <TimeBlock
          lineStyle='not'
          date='24.07.18'
          picture={require(".//Pictures/180724.jpg")}
          text='Первая фотосессия Хёнджина и Ай Эна в журнале "DAZED & CONFUSED KOREA"'
        />

        <TimeBlock
          lineStyle='not'
          date='19.07.18'
          picture={require(".//Pictures/180719.jpg")}
          text='Первая фотосессия Ли Ноу и Хёнджина в журнале "CéCi"'
        />

        <TimeBlock
          lineStyle='not'
          date='18.07.18'
          picture={require(".//Pictures/180718.jpg")}
          text='Сынмин становится ведущим шоу "After School Club"'
        />

        <TimeBlock
          lineStyle='not'
          date='29.05.18'
          picture={require(".//Pictures/180403.jpg")}
          text='Первое появление на шоу "After School Club"'
        />
        <VideoBlock
          lineStyle='not'
          date='18.05.18'
          text='Первое появление на развлекательном шоу (K-RUSH 3)'
          youtubeID='4P3vqaZjfks'
        />

        <VideoBlock
          lineStyle='not'
          date='30.04.18'
          text='Песня "District 9" преодолела отметку в 1 000 000 прослушиваний'
          youtubeID='u6unJQownW4'
        />
        <TimeBlock
          lineStyle='not'
          date='26.04.18'
          picture={require(".//Pictures/180416.jpg")}
          text='Первая фотосессия Stray Kids в журнале "10 Plus Star"'
        />

        <TimeBlock
          lineStyle='not'
          date='25.04.18'
          picture={require(".//Pictures/180425.jpg")}
          text='Лежачая трансляция LieV'
        />
        <TimeBlock
          lineStyle='not'
          date='14.04.18'
          picture={require(".//Pictures/180414.jpg")}
          text='Первое выступление за границей на "KCON Japan 2018"'
        />

        <VideoBlock
          lineStyle='not'
          date='03.04.18'
          text='Первый эпизод шоу "SK-TALKER"'
          youtubeID='Toy83iI3ixs'
        />

        <TimeBlock
          lineStyle='not'
          date='26.03.18'
          picture={require(".//Pictures/180325(2).jpg")}
          text='Релиз дебютного мини-альбома "I am NOT"'
        />

        <TimeBlock
          lineStyle='not-to-predebut'
          date='25.03.18'
          picture={require(".//Pictures/180325.jpg")}
          text='Дебютный шоукейс "Stray Kids UNVEIL [Op. 01 : I Am NOT]"'
        />

        <VideoBlock
          lineStyle='predebut'
          date='13.03.18'
          text='Первый эпизод шоу "INTRO"'
          youtubeID='1BVp5OOITWQ'
        />

        <TimeBlock
          lineStyle='predebut'
          date='13.02.18'
          picture={require(".//Pictures/180213.jpg")}
          text='Stray Kids становятся моделями бренда одежды JAMBANGEE'
        />

        <TimeBlock
          lineStyle='predebut'
          date='06.02.18'
          picture={require(".//Pictures/180206.jpg")}
          text='Выпускной Чанбина'
        />

        <VideoBlock
          lineStyle='predebut'
          date='21.01.18'
          text='Первая трансляция 3RACHA на VLIVE'
          youtubeID='AE9XHAQqhlc'
        />

        <VideoBlock
          lineStyle='predebut'
          date='16.01.18'
          text='Первый эпизод шоу "The 9th"'
          youtubeID='zcTItqGp7AU'
        />

        <TimeBlock
          lineStyle='predebut'
          date='08.01.18'
          picture={require(".//Pictures/180108.jpg")}
          text='Релиз предебютного альбома Stray Kids "Mixtape"'
        />

        <VideoBlock
          lineStyle='predebut'
          date='11.01.18'
          text='Первое выступление на музыкальном шоу с "Hellevator"'
          youtubeID='oDhUiQBI_xw'
        />

        <VideoBlock
          lineStyle='predebut'
          date='26.12.17'
          text='Первая трансляция на VLIVE в полном составе'
          youtubeID='C11iIhAZANw'
        />

        <TimeBlock
          lineStyle='predebut'
          date='17.10.17'
          picture={require(".//Pictures/171017.jpg")}
          text='Начало трансляции шоу на выживание "Stray Kids"'
        />

        <VideoBlock
          lineStyle='predebut'
          date='20.11.17'
          text='Первая трансляция на VLIVE (без Ли Ноу)'
          youtubeID='54qV2Y-H2gA'
        />

        <TimeBlock
          lineStyle='predebut'
          date='19.12.17'
          picture={require(".//Pictures/171219.jpg")}
          text='Финальный эпизод шоу на выживание, утверждение финального состава'
        />

        <TimeBlock
          lineStyle='predebut'
          date='01.11.17'
          picture={require(".//Pictures/171101.jpg")}
          text='Релиз цифорового сингла "Hellevator"'
        />

        <VideoBlock
          lineStyle='predebut'
          date='07.10.17'
          text='Релиз первого клипа "Hellevator"'
          youtubeID='AdfIfFGCqgo'
        />

        <VideoBlock
          lineStyle='predebut'
          date='22.08.17'
          text='Шоукейс стажеров JYP, на котором Stray Kids были отобраны для участия в шоу на выживание через голосование'
          youtubeID='csT59JB9j48'
        />

        <VideoBlock
          lineStyle='predebut'
          date='15.07.17'
          text='Ли Ноу присоединился к JYP'
          youtubeID='oenqlXWYiok'
        />

        <TimeBlock
          lineStyle='predebut'
          date='2017 год'
          picture={require(".//Pictures/year2017(2).jpg")}
          text='Сынмин присоединился к JYP'
        />

        <TimeBlock
          lineStyle='predebut'
          date='2017 год'
          picture={require(".//Pictures/year2017.jpg")}
          text='Феликс присоединился к JYP'
        />

        <TimeBlock
          lineStyle='predebut'
          date='18.01.17'
          picture={require(".//Pictures/170118.jpg")}
          text='Неофициальный дебют 3RACHA. Первый микстейп "J:/2017/mixtape" на SoundCloud. '
        />

        <TimeBlock
          lineStyle='predebut'
          date='2016 год'
          picture={require(".//Pictures/year2016.jpg")}
          text='Чанбин присоединился к JYP'
        />

        <TimeBlock
          lineStyle='predebut'
          date='2015 год'
          picture={require(".//Pictures/year2015(3).jpg")}
          text='Хёнджин присоединился к JYP'
        />

        <TimeBlock
          lineStyle='predebut'
          date='2015 год'
          picture={require(".//Pictures/year2015(2).jpg")}
          text='Ай Эн присоединился к JYP'
        />

        <TimeBlock
          lineStyle='predebut'
          date='2015 год'
          picture={require(".//Pictures/year2015.jpg")}
          text='Хан присоединился к JYP'
        />

        <LastBlock
          lineStyle='predebut-to-bg'
          date='11.04.11'
          text='Бан Чан присоединился к JYP'
          youtubeID='dEKUcZqcj3g'
        />
        <Footer />
        <div></div>
      </div>
    </div>
  );
}

export default App;
