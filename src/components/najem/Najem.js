import React from 'react'
import img from '../../assets/images/car3.jpg'
import './Najem.css'

function Najem() {
  return (
    <div>

        <div className='najemSection'>
            <div className='najemLeft'>
                <p>Wypożyczalnia samochodów PAI zapewni samochód, zawsze gdy zajdzie taka potrzeba. Wynajem krótkoterminowy to usługa najmu samochodu od 1 do 30 dni. Procedury związane z uruchomieniem wynajmu krótkoterminowego są bardzo uproszczone i nie wymagają tak skomplikowanej analizy, jak ma to miejsce w przypadku finansowania pojazdów w leasingu bądź wynajmie długoterminowym. Czynsz usługi uwzględnia serwis, opony sezonowe, pełen pakiet usług ubezpieczeniowych wraz z rozliczeniem szkód komunikacyjnych oraz zapewnieniem samochodu zastępczego na czas awarii. </p>
            </div>
            <div className='najemRight'>
               <input type='image' img src={img} alt='photo' className='najemImg'/> 
            </div>
        </div>

        <br />
        <p>Wynajem krótkoterminowy jest dobrym rozwiązaniem, gdy:</p>
        <ul>
            <li>Państwa pojazd uległ wypadkowi lub awarii</li>
            <li>wybierają się Państwo na krótki wypad weekendowy lub dłuższy wyjazd na urlop</li>
            <li>potrzebny jest Państwu samochód do przeprowadzi lub przewiezienia wielkogabarytowych rzeczy</li>
            <li>wybierają się Państwo na wyjazd służbowy</li>
            <li>przyjeżdżacie Państwo do rodziny w Polsce i potrzebujecie wynająć samochód na lotnisku</li>
        </ul>

        <br />
        <p>Korzyści z wynajmu krótkoterminowego:</p>
        <ul>
            <li>możliwość rezerwacji pojazdu nawet na godzinę przed wynajem</li>
            <li>możliwość zwrotu pojazdu w każdym mieście z pukntem wynajmu wypożyczalni PAI</li>
            <li>konkurencyjne stawki wynajmu indywidualnie dostosowane do Państwa potrzeb</li>
            <li>gwarancja dostarczenia/odbioru pojazdu w wybrane przez Klienta miejsce</li>
            <li>pełna obsługa techniczna</li>
            <li>24 godzinny assistance likwidacji szkód komunikacyjnych</li>
            <li>gwarancja samochodu zastępczego w przypadku awarii</li>
            <li>brak minimalnego czasu wynajmu</li>
            <li>możliwość przedłużenia bądź skrócenia okresu wynajmu</li>
            <li>przejrzystość rozliczeń</li>
            <li>pełny pakiet ubezpieczeń</li>
            <li>gwarancja nowych, bardzo dobrze wyposażonych pojazdów (samochody nie starsze niż 12 miesięcy)</li>
            <li>szeroka gama dostępnych modeli samochodów (osobowe oraz dostawcze)</li>
            <li>możliwość wyposażenia pojazdu w system nawigacji lub fotelik</li>
        </ul>

    </div>
  )
}

export default Najem