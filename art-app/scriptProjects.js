
// JavaScript kodu
const AtaturkCardImage = document.getElementById('AtaturkCard');
const Ataturkimages = ['Ataturk/Atatürk Asker.jpeg', 'Ataturk/Atatürk Takım Elbise.jpeg']; // Değiştirilecek resimlerin dosya adlarını buraya ekleyin
let currentAtaturkImageIndex = 0;

function AtaturkPrevious() {
  currentAtaturkImageIndex = (currentAtaturkImageIndex - 1 + Ataturkimages.length) % Ataturkimages.length;
  AtaturkCardImage.src = Ataturkimages[currentAtaturkImageIndex];
}

function AtaturkNext() {
  currentAtaturkImageIndex = (currentAtaturkImageIndex + 1) % Ataturkimages.length;
  AtaturkCardImage.src = Ataturkimages[currentAtaturkImageIndex];
}

const MadenCardImage = document.getElementById('MadenCard');
const MadenImages =  ['Maden/Madenci Adam.jpeg','Maden/Madenci -3.jpeg', 'Maden/Madenci - 6.jpeg', 'Maden/Maden.jpeg', 'Maden/Madenci - 2.jpeg'];
let currentMadenImageIndex = 0;

function MadenPrevious() {
  currentMadenImageIndex = (currentMadenImageIndex - 1 + MadenImages.length) % MadenImages.length;
  MadenCardImage.src = MadenImages[currentMadenImageIndex];
}

function MadenNext() {
  currentMadenImageIndex = (currentMadenImageIndex + 1) % MadenImages.length;
  MadenCardImage.src = MadenImages[currentMadenImageIndex];
}

const MadenciCardImage = document.getElementById('MadenciCard');
const MadenciImages =  ['Madenci/Madenci - 5.jpeg','Madenci/Madenci - 4.jpeg'];
let currentMadenciImageIndex = 0;

function MadenciPrevious() {
  currentMadenciImageIndex = (currentMadenciImageIndex - 1 + MadenciImages.length) % MadenciImages.length;
  MadenciCardImage.src = MadenciImages[currentMadenciImageIndex];
}

function MadenciNext() {
  currentMadenciImageIndex = (currentMadenciImageIndex + 1) % MadenciImages.length;
  MadenciCardImage.src = MadenciImages[currentMadenciImageIndex];
}


const Kuvayi_MilliyeCardImage = document.getElementById('Kuvayi-Milliye1Card');
const Kuvayi_MilliyeImages =  ['Kuvayi-Milliye 1/Kuvayi-Milliye - 3.jpeg','Kuvayi-Milliye 1/Kuvayi-Milliye -4.jpeg','Kuvayi-Milliye 1/Kuvayi-Millliye -5.jpeg'];
let currentKuvayi_MilliyeImageIndex = 0;

function Kuvayi_MilliyePrevious() {
  currentKuvayi_MilliyeImageIndex = (currentKuvayi_MilliyeImageIndex - 1 + Kuvayi_MilliyeImages.length) % Kuvayi_MilliyeImages.length;
  Kuvayi_MilliyeCardImage.src = Kuvayi_MilliyeImages[currentKuvayi_MilliyeImageIndex];
}

function Kuvayi_MilliyeNext() {
  currentKuvayi_MilliyeImageIndex = (currentKuvayi_MilliyeImageIndex + 1) % Kuvayi_MilliyeImages.length;
  Kuvayi_MilliyeCardImage.src = Kuvayi_MilliyeImages[currentKuvayi_MilliyeImageIndex];
}

const Kuvayi_MilliyeTwoCardImage = document.getElementById('Kuvayi-Milliye2Card');
const Kuvayi_MilliyeTwoImages =  ['Kuvayi-Milliye 2/Kuvayi-Milliye.jpeg','Kuvayi-Milliye 2/Kuvayi-Millliye - 2.jpeg','Kuvayi-Milliye 2/Kuvayi-Millliye 6.jpeg'];
let currentKuvayi_MilliyeTwoImageIndex = 0;

function Kuvayi_MilliyeTwoPrevious() {
  currentKuvayi_MilliyeTwoImageIndex = (currentKuvayi_MilliyeTwoImageIndex - 1 + Kuvayi_MilliyeTwoImages.length) % Kuvayi_MilliyeTwoImages.length;
  Kuvayi_MilliyeTwoCardImage.src = Kuvayi_MilliyeTwoImages[currentKuvayi_MilliyeTwoImageIndex];
}

function Kuvayi_MilliyeTwoNext() {
  currentKuvayi_MilliyeTwoImageIndex = (currentKuvayi_MilliyeTwoImageIndex + 1) % Kuvayi_MilliyeTwoImages.length;
  Kuvayi_MilliyeTwoCardImage.src = Kuvayi_MilliyeTwoImages[currentKuvayi_MilliyeTwoImageIndex];
}

const DonerciCardImage = document.getElementById('DönerciCard');
const DonerciImages =  ['Dönerci/Dönerci.jpeg','Dönerci/Dönerci - 2.jpeg'];
let currentDonerciImageIndex = 0;

function DönerciPrevious() {
  currentDonerciImageIndex = (currentDonerciImageIndex - 1 + DonerciImages.length) % DonerciImages.length;
  DonerciCardImage.src = DonerciImages[currentDonerciImageIndex];
}

function DönerciNext() {
  currentDonerciImageIndex = (currentDonerciImageIndex + 1) % DonerciImages.length;
  DonerciCardImage.src = DonerciImages[currentDonerciImageIndex];
}

const DenizCardImage = document.getElementById('DenizCard');
const DenizImages =  ['DenizCanlısı/Deniz Canlısı.jpeg','DenizCanlısı/Deniz Canlısı - 2.jpeg'];
let currentDenizImageIndex = 0;

function DenizPrevious() {
  currentDenizImageIndex = (currentDenizImageIndex - 1 + DenizImages.length) % DenizImages.length;
  DenizCardImage.src = DenizImages[currentDenizImageIndex];
}

function DenizNext() {
  currentDenizImageIndex = (currentDenizImageIndex + 1) % DenizImages.length;
  DenizCardImage.src = DenizImages[currentDenizImageIndex];
}

const EfeCardImage = document.getElementById('EfeCard');
const EfeImages =  ['Efe/Efe - Yörük -3.jpg','Efe/Efe - Yörük -11.jpeg','Efe/Efe - Yörük -12.jpeg','Efe/Efe-Yörük -10.jpeg','Efe/Efe -Yörük - 9.jpeg','Efe/Efe-Yörük -2.jpeg'];
let currentEfeImageIndex = 0;

function EfePrevious() {
  currentEfeImageIndex = (currentEfeImageIndex - 1 + EfeImages.length) % EfeImages.length;
  EfeCardImage.src = EfeImages[currentEfeImageIndex];
}

function EfeNext() {
  currentEfeImageIndex = (currentEfeImageIndex + 1) % EfeImages.length;
  EfeCardImage.src = EfeImages[currentEfeImageIndex];
}

const FilozofCardImage = document.getElementById('FilozofCard');
const FilozofImages =  ['Filozof/Filozof - 4.jpeg','Filozof/Filozof - 6.jpeg','Filozof/Filozof.jpeg'];
let currentFilozofImageIndex = 0;

function FilozofPrevious() {
  currentFilozofImageIndex = (currentFilozofImageIndex - 1 + FilozofImages.length) % FilozofImages.length;
  FilozofCardImage.src = FilozofImages[currentFilozofImageIndex];
}

function FilozofNext() {
  currentFilozofImageIndex = (currentFilozofImageIndex + 1) % FilozofImages.length;
  FilozofCardImage.src = FilozofImages[currentFilozofImageIndex];
}

const OkuzCardImage = document.getElementById('OkuzCard');
const OkuzImages =  ['Okuz/Öküz Kafası -2.jpeg','Okuz/Öküz Kafası-3.jpeg','Okuz/Öküz Kfası.jpeg'];
let currentOkuzImageIndex = 0;

function OkuzPrevious() {
  currentOkuzImageIndex = (currentOkuzImageIndex - 1 + OkuzImages.length) % OkuzImages.length;
  OkuzCardImage.src = OkuzImages[currentOkuzImageIndex];
}

function OkuzNext() {
  currentOkuzImageIndex = (currentOkuzImageIndex + 1) % OkuzImages.length;
  OkuzCardImage.src = OkuzImages[currentOkuzImageIndex];
}

const YorukCardImage = document.getElementById('YorukCard');
const YorukImages =  ['Yörükler/Efe - Yörük - 6.jpeg','Yörükler/Efe -  Yörük.jpeg','Yörükler/Efe - Yörük -7.jpeg','Yörükler/Efe - Yörük-4.jpeg','Yörükler/Efe -Yörük -5.jpeg','Yörükler/Efe -Yörük -8.jpeg'];
let currentYorukImageIndex = 0;

function YorukPrevious() {
  currentYorukImageIndex = (currentYorukImageIndex - 1 + YorukImages.length) % YorukImages.length;
  YorukCardImage.src = YorukImages[currentYorukImageIndex];
}

function YorukNext() {
  currentYorukImageIndex = (currentYorukImageIndex + 1) % YorukImages.length;
  YorukCardImage.src = YorukImages[currentYorukImageIndex];
}

const OthersCardImage = document.getElementById('OthresCard');
const OthersImages =  ['Others/Ameliyat.jpeg','Others/Asker Büst.jpeg','Others/Asker Komutan.jpeg','Others/AliKuşçu.jpeg','Others/Filozof - 2.jpeg','Others/Filozof  -5.jpeg','Others/Filozof - 7.jpeg','Others/Filozof- 3.jpeg','Others/Kadın Büstü.jpeg','Others/Yaratık.jpeg','Others/Zombi.jpeg'];
let currentOthersImageIndex = 0;

function OthersPrevious() {
  currentOthersImageIndex = (currentOthersImageIndex - 1 + OthersImages.length) % OthersImages.length;
  OthersCardImage.src = OthersImages[currentOthersImageIndex];
}

function OthersNext() {
  currentOthersImageIndex = (currentOthersImageIndex + 1) % OthersImages.length;
  OthersCardImage.src = OthersImages[currentOthersImageIndex];
}