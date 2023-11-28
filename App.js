import React, { useState } from 'react';
import './App.css';

function App() {
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(10);
  const [randomNumber, setRandomNumber] = useState(null);
  const [randomLetter, setRandomLetter] = useState(null);

  const handleGenerateNumber = () => {
    const min = parseInt(minNumber);
    const max = parseInt(maxNumber);

    if (!isNaN(min) && !isNaN(max) && min < max) {
      const generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      setRandomNumber(generatedNumber);
    } else {
      setRandomNumber(null);
    }
  };
  /**
   * Bu kod, bir React bileşeni olan App bileşeni içindeki bir fonksiyonu temsil ediyor. Bu fonksiyon, rastgele bir sayı üretmeye yardımcı oluyor. İşlevi şu şekilde çalışıyor:

handleGenerateNumber fonksiyonu, kullanıcının girdiği minimum ve maksimum değerler arasında bir rastgele sayı oluşturuyor.
Kullanıcı, minNumber ve maxNumber state'lerini belirleyerek hangi aralıkta rastgele bir sayı üretmek istediğini belirtebilir.
parseInt fonksiyonu, kullanıcı tarafından girilen değerleri sayısal bir değere dönüştürüyor.
Ardından, isNaN fonksiyonu kullanılarak girilen değerlerin sayı olup olmadığı kontrol ediliyor ve belirlenen koşullara göre rastgele bir sayı oluşturuluyor veya hata durumunda null değeri atanıyor.
Bu fonksiyon, sayfa içinde rastgele bir sayı üretmek için kullanılabilir. Kullanıcıların girdiği aralıklara göre bu fonksiyon çalışır ve sonuç olarak bir sayı üretir. Bu sayede kullanıcılar, istedikleri aralıklarda rastgele sayılar elde edebilirler.
   */


  const handleGenerateLetter = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const generatedLetter = letters.charAt(Math.floor(Math.random() * letters.length));
    setRandomLetter(generatedLetter);
  };

  return (
    <div className="App">
      <h1>Rastgele Sayı ve Harf Üretici</h1>
      <div className="generator">
        <div className="input-group">
          <label>
            Minimum Sayı:
            <input
              type="number"
              value={minNumber}
              onChange={(e) => setMinNumber(e.target.value)}
            />
          </label>
          <label>
            Maximum Sayı:
            <input
              type="number"
              value={maxNumber}
              onChange={(e) => setMaxNumber(e.target.value)}
            />
          </label>
        </div>
        <button onClick={handleGenerateNumber}>Sayı Oluştur</button>
        {randomNumber !== null && (
          <p className="result">Oluşturulan Sayı: {randomNumber}</p>
        )}
        <button onClick={handleGenerateLetter}>Harf Oluştur</button>
        {randomLetter !== null && (
          <p className="result">Oluşturulan Harf: {randomLetter}</p>
        )}
      </div>
    </div>
  );
}

export default App;
/**
 * Bu kod parçası, bir React bileşeni olan App bileşeninin JSX yapısını içeriyor. Bu yapı, kullanıcı arayüzünü oluşturur ve kullanıcıların rastgele sayı ve harf oluşturucularını kullanmalarını sağlar.

Birkaç ana noktayı ele alalım:

Rastgele Sayı Oluşturma: handleGenerateNumber fonksiyonu, kullanıcının belirlediği minimum ve maksimum değerler arasında rastgele bir sayı üretir. Kullanıcı bu değerleri girdikten sonra "Sayı Oluştur" butonuna basarak bu fonksiyonu tetikleyebilir.

Rastgele Harf Oluşturma: handleGenerateLetter fonksiyonu, 'A' ile 'Z' arasındaki harfleri içeren bir string oluşturur. Bu string üzerinde rastgele bir pozisyondaki harfi seçer ve ekranda gösterir.

Kullanıcı Arayüzü: JSX yapısında, kullanıcıların minimum ve maksimum sayıları girebileceği input alanları ve butonlar yer alır. Kullanıcılar bu alanları doldurduktan sonra "Sayı Oluştur" veya "Harf Oluştur" butonlarına tıklayarak rastgele sayı veya harf elde edebilirler.

Bu yapı, React bileşenleri aracılığıyla kullanıcı etkileşimini yönetir ve bu etkileşimlere bağlı olarak rastgele sayı veya harf üretir
 */

/** 
 * 
useState:
useState, React'te durum tutmayı ve bileşenlerin yeniden render edilmesini sağlar.
minNumber, maxNumber, randomNumber ve randomLetter adında dört farklı durum (state) tanımlanır.
setMinNumber, setMaxNumber, setRandomNumber, setRandomLetter, bu durumları güncellemek için kullanılan fonksiyonlardır.
handleGenerateNumber Fonksiyonu:

Kullanıcıların girdiği minimum ve maksimum sayılar arasında bir rastgele sayı oluşturur.
parseInt kullanarak girdilerin sayıya dönüşmesini sağlar.
Math.floor ve Math.random kullanarak belirtilen aralıkta rastgele bir sayı oluşturur.
Oluşturulan sayıyı setRandomNumber ile günceller.
handleGenerateLetter Fonksiyonu:

Alfabe içerisinden rastgele bir harf seçer.
Math.random ve charAt kullanarak rastgele bir harf oluşturur.
Oluşturulan harfi setRandomLetter ile günceller.
Kullanıcı Arayüzü (JSX):

className ile stil verilen div ve input elemanları kullanıcı arayüzünü oluşturur.
value ve onChange ile input alanlarındaki değerlerin ve kullanıcı girdilerinin durumları yönetilir.
onClick ile butonlara tıklama olaylarına karşılık gelen fonksiyonlar atanır.
{randomNumber !== null} ve {randomLetter !== null} ile rastgele oluşturulan sayı ve harfler ekranda görüntülenir.
Bu kod parçaları, React bileşenleri kullanarak kullanıcı arayüzünü oluşturur, durumları günceller ve kullanıcı etkileşimlerine tepki verir. Bu şekilde, sayfa üzerinde rastgele sayı ve harf oluşturma işlevselliği sağlanır. */