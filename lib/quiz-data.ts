export interface Question {
  id: string
  chapter: number
  question: string
  image?: string
  options: { label: string; text: string }[]
  correct: string
}

export const quizData: Question[] = [
  // Fejezet 1
  {
    id: "1-1",
    chapter: 1,
    question:
      "Az ábrán egy ország konkáv TLH görbéje látható. Az A pontban az x termék alternatív költsége .... y termék.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fejezet1kerdes1.jpeg-HP3sc94oM14w3DUp4DWzxRjGvDnpij.png",
    options: [
      { label: "a", text: "100/75" },
      { label: "b", text: "51/68" },
      { label: "c", text: "75/100" },
      { label: "d", text: "38/45" },
    ],
    correct: "c",
  },
  {
    id: "1-2",
    chapter: 1,
    question: "A fenti ábráról nem lehet leolvasni",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fejezet1kerdes1.jpeg-HP3sc94oM14w3DUp4DWzxRjGvDnpij.png",
    options: [
      { label: "a", text: "az autark fogyasztási szerkezet" },
      { label: "b", text: "a maximális x termelt mennyiséget, amennyiben y termeléséről az ország lemond" },
      { label: "c", text: "az ország reál GDP-jét világpiaci árakon számítva" },
      { label: "d", text: "az ország reál GDP-jét autark árakon számítva" },
    ],
    correct: "c",
  },
  {
    id: "1-3",
    chapter: 1,
    question: "A fenti ábráról le lehet olvasni",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fejezet1kerdes1.jpeg-HP3sc94oM14w3DUp4DWzxRjGvDnpij.png",
    options: [
      { label: "a", text: "az ország reál GDP-jét világpiaci árakon számítva" },
      { label: "b", text: "az ország reál GDP-jét autark árakon számítva" },
      { label: "c", text: "a szabad kereskedelmi termelési szerkezetet" },
      { label: "d", text: "a szabad kereskedelmi fogyasztási szerkezetet" },
    ],
    correct: "b",
  },
  {
    id: "1-4",
    chapter: 1,
    question: "A transzformációs határráta (MRT) megmutatja, hogy a TLH görbe adott pontjában",
    options: [
      { label: "a", text: "hány egység x-et veszítenek, ha egy marginális egységgel megnövelik az y termelését" },
      { label: "b", text: "mekkora az y termék alternatív költsége" },
      { label: "c", text: "milyen arányban termeli az ország az x és y jószágot" },
      { label: "d", text: "hány egység y-t veszítenek, ha egy marginális egységgel megnövelik az x termelését" },
    ],
    correct: "d",
  },
  {
    id: "1-5",
    chapter: 1,
    question: "Egy ország termelési pontja",
    options: [
      { label: "a", text: "sohasem eshet a TLH görbe fölé" },
      { label: "b", text: "a TLH görbe alá kerül, ha kereskedelmi korlátozásokat alkalmaz" },
      { label: "c", text: "sohasem kerülhet a TLH görbe alá" },
      { label: "d", text: "a TLH görbe fölé kerülhet a komparatív előnyöknek megfelelő külkereskedelem révén" },
    ],
    correct: "a",
  },
  {
    id: "1-6",
    chapter: 1,
    question:
      "Ha az ország a komparatív előnnyel gyártott termékre szakosodik és szabad kereskedelmet folytat, akkor a fogyasztási egyenesnek",
    options: [
      { label: "a", text: "nincs közös pontja a TLH-val" },
      { label: "b", text: "egy közös pontja van a TLH-val és ez a pont a termelési pont" },
      { label: "c", text: "több közös pontja van a TLH-val" },
      { label: "d", text: "a fentiek közül bármelyik előfordulhat" },
    ],
    correct: "b",
  },
  {
    id: "1-7",
    chapter: 1,
    question: "Amennyiben a Pv világpiaci áregyenes meredekebb, mint a Pa autark áregyenes, úgy az ország",
    options: [
      { label: "a", text: "y terméket importálja" },
      { label: "b", text: "y terméket exportálja" },
      { label: "c", text: "x terméket importálja" },
      { label: "d", text: "y terméket gyártja komparatív előnnyel" },
    ],
    correct: "a",
  },
  {
    id: "1-8",
    chapter: 1,
    question: "Amennyiben a Pv világpiaci áregyenes laposabb, mint a Pa autark áregyenes, úgy az ország",
    options: [
      { label: "a", text: "y terméket importálja" },
      { label: "b", text: "y terméket exportálja" },
      { label: "c", text: "x terméket exportálja" },
      { label: "d", text: "x terméket gyártja komparatív előnnyel" },
    ],
    correct: "b",
  },
  {
    id: "1-9",
    chapter: 1,
    question:
      "Egy ország 100 egység x-et és 50 egység y-t termel szabad kereskedelem mellett. Az x termék világpiaci ára px=5euro, az y-é pedig py=1eur. Ennek az országnak az érvényes egyenlőjövedelem egyenese:",
    options: [
      { label: "a", text: "y=550-0,2x" },
      { label: "b", text: "y=550-5x" },
      { label: "c", text: "y=550+5x" },
      { label: "d", text: "y=550-0,2x" },
    ],
    correct: "b",
  },
  {
    id: "1-10",
    chapter: 1,
    question:
      "Az ábrán egy kis ország transzformációs görbéje és fogyasztási egyenese látható. Az ország komparatív előnyei szerinti specializálódik és szabad kereskedelmet folytat. Az ábra alapján a nemzetközi árarány Pv=",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fejezet1kerdes10.jpeg-ebgWOmwKbh9rY7cT8k5JKC2VlQJGF8.png",
    options: [
      { label: "a", text: "0,75" },
      { label: "b", text: "1,33" },
      { label: "c", text: "4,16" },
      { label: "d", text: "0,84" },
    ],
    correct: "a",
  },
  {
    id: "1-11",
    chapter: 1,
    question: "Az ábrázolt ország világpiaci árakon mért reál GDP-je y termékben kifejezve",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fejezet1kerdes10.jpeg-ebgWOmwKbh9rY7cT8k5JKC2VlQJGF8.png",
    options: [
      { label: "a", text: "51" },
      { label: "b", text: "75" },
      { label: "c", text: "100" },
      { label: "d", text: "68" },
    ],
    correct: "b",
  },
  {
    id: "1-12",
    chapter: 1,
    question: "Az ábrázolt ország világpiaci árakon mért reál GDP-je x termékben kifejezve",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fejezet1kerdes10.jpeg-ebgWOmwKbh9rY7cT8k5JKC2VlQJGF8.png",
    options: [
      { label: "a", text: "51" },
      { label: "b", text: "75" },
      { label: "c", text: "100" },
      { label: "d", text: "68" },
    ],
    correct: "c",
  },
  {
    id: "1-13",
    chapter: 1,
    question:
      "Az ábrázolt ország maximálisan megtermelhető x termékeinek a mennyisége, amennyiben y termék termeléséről teljesen lemond",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fejezet1kerdes10.jpeg-ebgWOmwKbh9rY7cT8k5JKC2VlQJGF8.png",
    options: [
      { label: "a", text: "45" },
      { label: "b", text: "68" },
      { label: "c", text: "75" },
      { label: "d", text: "100" },
    ],
    correct: "b",
  },
  {
    id: "1-14",
    chapter: 1,
    question: "y-ra történő teljes specializáció esetén az y termék maximális mennyisége",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fejezet1kerdes10.jpeg-ebgWOmwKbh9rY7cT8k5JKC2VlQJGF8.png",
    options: [
      { label: "a", text: "75" },
      { label: "b", text: "51" },
      { label: "c", text: "38" },
      { label: "d", text: "18" },
    ],
    correct: "b",
  },
  {
    id: "1-15",
    chapter: 1,
    question: "Az ábrán szereplő ország",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fejezet1kerdes10.jpeg-ebgWOmwKbh9rY7cT8k5JKC2VlQJGF8.png",
    options: [
      { label: "a", text: "x terméket termeli komparatív előnnyel" },
      { label: "b", text: "y terméket termeli komparatív előnnyel" },
      { label: "c", text: "y terméket exportálja" },
      { label: "d", text: "y termékének alternatív költsége alacsonyabb" },
    ],
    correct: "a",
  },
  {
    id: "1-16",
    chapter: 1,
    question:
      "A komparatív előnyök szerinti specializáció az autark helyzethez képest növeli az erőforrások elosztásának világszintű hatékonyságát, mert minden ország arra a termékre szakosodna",
    options: [
      { label: "a", text: "amelyet a másik ország nem tud megtermelni" },
      { label: "b", text: "amelyet relatív kisebb költséggel tud megtermelni" },
      { label: "c", text: "amelyet korábban kezdett el termelni, mint a másik ország" },
      { label: "d", text: "amelyet külföldi fogyasztók preferálnak" },
    ],
    correct: "b",
  },
  {
    id: "1-17",
    chapter: 1,
    question: "Egy ország ajánlati görbéjén olyan pontok találhatók, amelyek",
    options: [
      { label: "a", text: "a termelés optimális mennyiségét mutatják különböző világpiaci árarányok mellett" },
      { label: "b", text: "egyforma jóléti szint elérését teszik lehetővé különböző világpiaci árarányok mellett" },
      {
        label: "c",
        text: "az export és az import optimális mennyiségét mutatják különböző világpiaci árarányok mellett",
      },
      { label: "d", text: "a fogyasztás optimális mennyiségét mutatják különböző világpiaci árarányok mellett" },
    ],
    correct: "c",
  },
  {
    id: "1-18",
    chapter: 1,
    question:
      "Az alábbi ábrán OC-vel jelöltünk egy kis ország ajánlati görbéjét, s Pv-vel az aktuális világpiaci arányt. Kis ország",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fejezet1kerdes18.jpeg-kr7xp4p6L2HIi0wRx5SiE0Wbh6Q8O4.png",
    options: [
      { label: "a", text: "x terméket termeli komparatív előnnyel" },
      { label: "b", text: "y terméket termeli komparatív előnnyel" },
      { label: "c", text: "x terméket importálja" },
      { label: "d", text: "y terméket importálja" },
    ],
    correct: "a",
  },
  {
    id: "1-19",
    chapter: 1,
    question: "Amennyiben a fenti ábrán szereplő kis országnak javul a nemzetközi cserearánya az azt eredményezi, hogy",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fejezet1kerdes18.jpeg-kr7xp4p6L2HIi0wRx5SiE0Wbh6Q8O4.png",
    options: [
      { label: "a", text: "több x-et exportál, és kevesebb y-t importál" },
      { label: "b", text: "több y-t exportál, és több x-et importál" },
      { label: "c", text: "több y-t exportál, és kevesebb x-et importál" },
      { label: "d", text: "több x-et exportál, és több y-t importál" },
    ],
    correct: "d",
  },
  {
    id: "1-20",
    chapter: 1,
    question:
      "Egy kis ország annál nagyobb hasznot realizálhat a nemzetközi munkamegosztás és csere révén az általános kereskedelmi modellben",
    options: [
      {
        label: "a",
        text: "minél közelebb áll autark belső áraránya a világpiaci árarányhoz",
      },
      {
        label: "b",
        text: "minél távolabb áll autark belső áraránya a világpiaci árarányhoz",
      },
      { label: "c", text: "minél hasonlóbbak a termelés feltételei a partnereihez" },
      {
        label: "d",
        text: "minél hasonlóbbak a fogyasztóinak preferenciái a külföldi fogyasztókéhoz",
      },
    ],
    correct: "b",
  },
  // Fejezet 2
  {
    id: "2-1",
    chapter: 2,
    question: "Smith kereskedelmi modelljében",
    options: [
      { label: "a", text: "az egyik ország minden terméknél abszolút előnyt élvez" },
      {
        label: "b",
        text: "a nemzetközi szakosodásnak az abszolút előnyök szerint kell létrejönnie, hogy a résztvevő országok hasznot realizálhassanak",
      },
      { label: "c", text: "bármelyik termékre szakosodnak az országok, az előnyösebb az autark állapothoz képest" },
      { label: "d", text: "az összes fenti válasz hamis" },
    ],
    correct: "b",
  },
  {
    id: "2-2",
    chapter: 2,
    question: "Egy országnak komparatív előnye van x termék termelésében, ha",
    options: [
      { label: "a", text: "az x termék előállításának alternatív költsége alacsonyabb, mint egy másik országban" },
      {
        label: "b",
        text: "az x szektorban egy egységnyi termelés relatív munkaerőigénye magasabb, mint egy másik országban",
      },
      { label: "c", text: "az x szektorban a relatív reálbér alacsonyabb, mint egy másik országban" },
      { label: "d", text: "mindegyik fenti válasz hamis" },
    ],
    correct: "a",
  },
  {
    id: "2-3",
    chapter: 2,
    question: "Ricardo modelljében a komparatív előnyöket a következő tényezők alakítják ki:",
    options: [
      { label: "a", text: "növekvő mérethozadék" },
      { label: "b", text: "csökkenő mérethozadék" },
      { label: "c", text: "eltérő rendelkezésre álló inputszerkezet" },
      { label: "d", text: "termelékenységi előny" },
    ],
    correct: "d",
  },
  {
    id: "2-4",
    chapter: 2,
    question:
      "A Ricardo-modellben annál több haszonra lehet szert tenni világszinten a komparatív előnyöknek megfelelő specializáció és külkereskedelem révén, minél nagyobb a különbség",
    options: [
      { label: "a", text: "a két ország fejlettségi szintje között" },
      { label: "b", text: "a két termék munkaóra-ráfordítása között" },
      { label: "c", text: "a fejlettebb ország termelékenységi előnye között a két terméknél" },
      { label: "d", text: "az egyik válasz sem helyes" },
    ],
    correct: "c",
  },
  {
    id: "2-5",
    chapter: 2,
    question:
      "A Ricardo-modellben annál nagyobb arányban részesedik az egyik ország a komparatív előnyök kihasználásából származó világszintű haszonból",
    options: [
      { label: "a", text: "minél messzebb áll a saját belső autark áraránya a kialakuló világpiaci áraránytól" },
      { label: "b", text: "minél közelebb áll a saját belső autark áraránya a kialakuló világpiaci áraránytól" },
      { label: "c", text: "minél fejlettebb az ország a partneréhez viszonyítva" },
      {
        label: "d",
        text: "az a, b, és c, pontban említett tényezők mindegyike közrejátszik a nagyobb haszon megszerzésében",
      },
    ],
    correct: "d",
  },
  {
    id: "2-6",
    chapter: 2,
    question: "A Ricardo-modellben az 1. országnak komparatív hátránya van az y termékben, ha",
    options: [
      { label: "a", text: "mindkét termékben (x és y) abszolút hátránya van, és ennek mértéke egyforma" },
      {
        label: "b",
        text: "az y termékben abszolút hátránya van, de ez nagyobb mértékű, mint az x terméknél meglévő abszolút hátránya",
      },
      {
        label: "c",
        text: "az y termékben abszolút hátránya van, de ez kisebb mértékű, mint az x terméknél meglévő abszolút hátránya",
      },
      {
        label: "d",
        text: "az y termékben abszolút hátránya van, de ez kisebb mértékű, mint az x terméknél meglévő abszolút előnye",
      },
    ],
    correct: "b",
  },
  {
    id: "2-7",
    chapter: 2,
    question: "Smith Ricardo modelljében az az eltérés, hogy",
    options: [
      { label: "a", text: "a fogyasztói preferenciák nem játszanak szerepet a termelékenységi előnyök kialakításában" },
      { label: "b", text: "egy termelési tényező szerepel" },
      { label: "c", text: "állandóak a mérethozadékok mindkét ágazatban" },
      { label: "d", text: "az abszolút előnyök miként jelennek meg a két ország esetében" },
    ],
    correct: "d",
  },
  {
    id: "2-8",
    chapter: 2,
    question: "A specifikus tényezők modellje a mikroökonómia definíciója szerint",
    options: [
      { label: "a", text: "nagyon hosszú tavú modell" },
      { label: "b", text: "hosszú távú modell" },
      { label: "c", text: "rövid távú modell" },
      { label: "d", text: "nagyon rövid távú modell" },
    ],
    correct: "c",
  },
  {
    id: "2-9",
    chapter: 2,
    question: "A specifikus tényezők modell jellemzője:",
    options: [
      { label: "a", text: "állandó mérethozadékú termelési függvények az egyes ágazatokban" },
      { label: "b", text: "a feltételezett időtáv megfelel a mikroökonómia rövid időtávjának" },
      { label: "c", text: "kiegyenlítődik a mobil tényező (munka) reáljövedelme az egyes ágazatok közt" },
      { label: "d", text: "az összes fenti válasz helyes" },
    ],
    correct: "d",
  },
  {
    id: "2-10",
    chapter: 2,
    question: "A specifikus tényezők modelljében",
    options: [
      { label: "a", text: "kiegyenlítődik belföldön a mobil tényező reáljövedelme az ágazatok között" },
      {
        label: "b",
        text: "a termékarány megváltozása mindkét specifikus tényező reáljövedelmét egyaránt növeli vagy csökkenti",
      },
      { label: "c", text: "a jószágok alternatív költsége állandó" },
      { label: "d", text: "kiegyenlítődik belföldön a specifikus tényezők reáljövedelme az ágazatok között" },
    ],
    correct: "a",
  },
  {
    id: "2-11",
    chapter: 2,
    question: "A specifikus tényezők modelljében a szabadkereskedelmi nyitás biztos vesztesei",
    options: [
      { label: "a", text: "a komparatív előnnyel rendelkező ágazat tőkesei" },
      { label: "b", text: "a komparatív hátránnyal rendelkező ágazat tőkesei" },
      { label: "c", text: "a munkások" },
      { label: "d", text: "a b, és a c, válasz is helyes" },
    ],
    correct: "b",
  },
  {
    id: "2-12",
    chapter: 2,
    question:
      "A mellékelt táblázatban két termék, x és y egy egységnek előállításához szükséges munkaórákat látjuk két gazdaságban. A táblázat alapján:",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fejezet2kerdes12.jpeg-LDvVP4p9y2nUMuJ0OrfazUepyJgpuo.png",
    options: [
      { label: "a", text: "Ricardo-modeljéről van szó" },
      { label: "b", text: "Adam Smith modelljéről van szó" },
      { label: "c", text: "a komparatív előnyök modelljéről van szó" },
      { label: "d", text: "a specifikus tényezők modelljéről van szó" },
    ],
    correct: "b",
  },
  {
    id: "2-13",
    chapter: 2,
    question:
      "Ha egy kormányzat valamilyen eszköz segítségével korlátozza az importot, akkor a specifikus tényezők modelljének keretei között ez előnyös az országban",
    options: [
      { label: "a", text: "a komparatív hátrányban lévő specifikus tényező tulajdonosainak" },
      { label: "b", text: "a komparatív előnyben lévő specifikus tényező tulajdonosainak" },
      { label: "c", text: "a mobil munkaerő tulajdonosainak" },
      { label: "d", text: "egyik felsorolt csoportnak sem előnyös" },
    ],
    correct: "a",
  },
  {
    id: "2-14",
    chapter: 2,
    question: "A Heckscher-Ohlin modellben a komparatív előnyöket … határozza meg.",
    options: [
      { label: "a", text: "az abszolút előnyök eltérő mértéke" },
      { label: "b", text: "a két ország különböző relatív tényezőellátottsága" },
      { label: "c", text: "a mérethozadékok növekedése" },
      { label: "d", text: "a fogyasztói preferenciák eltérése" },
    ],
    correct: "b",
  },
  {
    id: "2-15",
    chapter: 2,
    question: "A H-O modell feltevései köze tartozik, hogy:",
    options: [
      { label: "a", text: "a termelési tényezők szabadon áramlanak az országok között" },
      { label: "b", text: "az országok azonos technológiai lehetőségekkel rendelkeznek" },
      { label: "c", text: "az termelési tényezők áramlása előtt belföldön is korlátok állnak" },
      { label: "d", text: "minden tekintetben azonosak az országok termelési adottságai" },
    ],
    correct: "c",
  },
  {
    id: "2-16",
    chapter: 2,
    question:
      "Tegyük fel, hogy érvényesülnek a Heckscher-Ohlin-modell feltevései, és egy munkával jól ellátott kis ország liberalizálja a kereskedelmét. Ennek hatásara",
    options: [
      { label: "a", text: "megnő nála a termelés tőkeigényessége (a K/L arány) a munkaigényes ágazatban" },
      { label: "b", text: "megnő nála a termelés tőkeigényessége (a K/L arány) a tőkeigényes ágazatban" },
      { label: "c", text: "az a, és a b, válasz is helyes" },
      { label: "d", text: "a fentebbiek mind hamisak, mert mindkét ágazatban csökken a termelés tőkeigényessége" },
    ],
    correct: "c",
  },
  {
    id: "2-17",
    chapter: 2,
    question: "Közös vonás Smith, Ricardo, H-O és a specifikus tényezők modelljében, hogy",
    options: [
      { label: "a", text: "állandóak a termékek alternatív költségei" },
      { label: "b", text: "léteznek abszolút előnyök és hátrányok" },
      { label: "c", text: "eltérő az egyes termékek tényezőigényessége" },
      { label: "d", text: "az összes fenti válasz hamis" },
    ],
    correct: "d",
  },
  {
    id: "2-18",
    chapter: 2,
    question: "Közös vonás Smith, Ricardo, H-O és a specifikus tényezők modelljében, hogy",
    options: [
      { label: "a", text: "lineárisan homogén termelési függvényeket feltételez" },
      { label: "b", text: "nincs hangsúlyozott szerepe a fogyasztói preferenciák alakulásának" },
      { label: "c", text: "a komparatív előnyöket a termelési feltételek különbözőségére vezetik vissza" },
      { label: "d", text: "az összes fenti válasz helyes" },
    ],
    correct: "d",
  },
  {
    id: "2-19",
    chapter: 2,
    question: "Smith, Ricardo, H-O és a specifikus tényezők modellje egyaránt feltételezi, hogy",
    options: [
      { label: "a", text: "a termelési függvények azonos termékre nézve országonként eltérőek" },
      { label: "b", text: "a termelési függvények azonos termékre nézve országonként azonosak" },
      { label: "c", text: "a munka szabadon átcsoportosítható az iparágak közt" },
      { label: "d", text: "egy termelési tényezővel termelik a javakat" },
    ],
    correct: "c",
  },
  {
    id: "2-20",
    chapter: 2,
    question:
      "Ha két ország fejlettségi szintje között jelentős különbség van, akkor a köztük létrejövő nemzetközi munkamegosztás leírására alkalmas lehet",
    options: [
      { label: "a", text: "Ricardo modellje" },
      { label: "b", text: "a specifikus tényezők modellje" },
      { label: "c", text: "H-O modellje" },
      { label: "d", text: "mindhárom fenti modell alkalmas" },
    ],
    correct: "a",
  },
  // Fejezet 3
  {
    id: "3-1",
    chapter: 3,
    question: "Az optimális vámtarifa",
    options: [
      { label: "a", text: "kis és nagy ország esetében is nullától eltérő" },
      { label: "b", text: "csak kis ország esetében nagyobb nullánál" },
      { label: "c", text: "csak nagy ország esetében nulla" },
      { label: "d", text: "az összes válasz hamis" },
    ],
    correct: "d",
  },
  {
    id: "3-2",
    chapter: 3,
    question: "Amennyiben egy importtermék ára emelkedik vámkivetés hatására, akkor",
    options: [
      { label: "a", text: "a fogyasztói többlet nő" },
      { label: "b", text: "a termelői többlet csökken" },
      { label: "c", text: "tiltó vám esetén a kormányzat vámbevételre tesz szert" },
      { label: "d", text: "a fogyasztói többlet csökken" },
    ],
    correct: "d",
  },
  {
    id: "3-3",
    chapter: 3,
    question:
      "A fenti ábrán egy kis ország belső keresleti és kínálati görbéit láthatjuk importterméke piacán, aminek világpiaci ára Pv. Amennyiben t vámot vetnek ki az adott termékre, akkor a termék torzított ára Pt-re emelkedik. Szabad kereskedelem mellett a termék termelése",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fejezet3kerdes3.jpeg-xIO8sQok8LBM5apZI62hLpcuS7WtdB.png",
    options: [
      { label: "a", text: "q1" },
      { label: "b", text: "q2" },
      { label: "c", text: "q3" },
      { label: "d", text: "q4" },
    ],
    correct: "a",
  },
  {
    id: "3-4",
    chapter: 3,
    question:
      "Egy kis ország TLH görbéje konkáv, és vámmal korlátozza, de nem szünteti meg a behozatalát. Ebben az esetben az ország világpiaci árakon számított GDP-je ceteris paribus",
    options: [
      { label: "a", text: "pontosan ugyanakkora, mint szabad kereskedelem esetén" },
      { label: "b", text: "pontosan ugyanakkora, mint autarkia esetén" },
      { label: "c", text: "nagyobb mint autarkiában, de kisebb, mint szabad kereskedelem mellett" },
      { label: "d", text: "nagyobb, mint szabad kereskedelem mellett" },
    ],
    correct: "c",
  },
  {
    id: "3-5",
    chapter: 3,
    question: "A vámtarifa ceteris paribus emelése kis országban",
    options: [
      { label: "a", text: "mindig növeli az állami vámbevételt" },
      { label: "b", text: "mindig csökkenti az állami vámbevételt" },
      { label: "c", text: "sosem befolyásolja az állami vámbevételt" },
      { label: "d", text: "mindkét irányban módosíthatja, de változatlanul is hagyhatja az állami vámbevételt" },
    ],
    correct: "d",
  },
  {
    id: "3-6",
    chapter: 3,
    question:
      "Ha ceteris paribus csökken egy termék világpiaci ára, amelyre belföldön egyösszegű vám van érvényben, akkor ez normális alakú belföldi keresleti és kínálati görbék esetén",
    options: [
      { label: "a", text: "növeli az import mennyiségét" },
      { label: "b", text: "csökkenti a holtteher-veszteségét" },
      { label: "c", text: "csökkenti az állam vámbevételét" },
      { label: "d", text: "növeli a hazai termelők termelői többletét" },
    ],
    correct: "a",
  },
  {
    id: "3-7",
    chapter: 3,
    question:
      "Ha egy vám és egy kvóta egyforma mértékben növeli meg egy importtal versengő termék belföldi árát, akkor",
    options: [
      { label: "a", text: "a kettő közgazdasági hatásai mindenben egyformák" },
      {
        label: "b",
        text: "a kettő közül a kvóta okozhat nagyobb jóléti veszteséget, mert a kvótajáradék külföldre kerülhet",
      },
      { label: "c", text: "a két eszköz hatásai a külföldi exportőröket biztosan azonosan érintik" },
      { label: "d", text: "a vám előnyösebb, mert erről a pénzügyminiszter szívesebben mond le, mint a kvótáról" },
    ],
    correct: "b",
  },
  {
    id: "3-8",
    chapter: 3,
    question:
      "Ha a protekcionista intézkedésnek az a célja, hogy a belföldi termelők stabil áron értékesíthessemel a hazai piacon, akkor ezt a célt leginkább … leget elérni.",
    options: [
      { label: "a", text: "stabilan tartott értékvámmal" },
      { label: "b", text: "stabilan tartott egyösszegű vámmal" },
      { label: "c", text: "a világpiaci ártól függő csúszó vámmal (lefölözéssel)" },
      { label: "d", text: "stabilan tartott mennyiségi korlátozással" },
    ],
    correct: "c",
  },
  {
    id: "3-9",
    chapter: 3,
    question:
      "Ha a protekcionista intézkedéseknek az a célja, hogy a lehető legkevésbé ingadozzék az import mennyisége egy termékből, akkor erre a célra … a legalkalmasabb eszköz",
    options: [
      { label: "a", text: "az értékvám" },
      { label: "b", text: "az egyösszegű vám" },
      { label: "c", text: "a kvóta" },
      { label: "d", text: "a bürökratikus akadályoztatás (pl. hosszadalmas, költséges vámeljárás)" },
    ],
    correct: "c",
  },
  {
    id: "3-10",
    chapter: 3,
    question: "Az importkvóta nagyobb nemzetgazdasági veszteséget okozhat az importőr országban, mint a vám, mert",
    options: [
      { label: "a", text: "a kvótajáradékot az exportőrök is realizálhatják" },
      {
        label: "b",
        text: "a kvóta a vámmal szemben lehetőséget ad a megvédett belföldi monopóliumnak, hogy emelje a piaci árat",
      },
      { label: "c", text: "az a, és a b, válasz is helyes" },
      { label: "d", text: "az összes fenti válasz hamis" },
    ],
    correct: "c",
  },
  {
    id: "3-11",
    chapter: 3,
    question:
      "Szabad kereskedelem mellett kialakuló termelési és fogyasztási szerkezetet is eltorzítja a következő állami intézkedés:",
    options: [
      { label: "a", text: "vám bevezetése az importtermékre" },
      { label: "b", text: "termelési szubvenció bevezetése az importtermékre" },
      { label: "c", text: "fogyasztási adó bevezetése az importtermékre" },
      { label: "d", text: "az a, és a b, válasz is helyes" },
    ],
    correct: "a",
  },
  {
    id: "3-12",
    chapter: 3,
    question: "A kis ország által bevezetett importkorlátozás terhei",
    options: [
      { label: "a", text: "teljes egészében a saját fogyasztóira hárulnak" },
      { label: "b", text: "teljes egészében az exportőrökre hárulnak" },
      {
        label: "c",
        text: "megoszlanak a saját fogyasztói és az exportőrök között, és annál nagyobb teher hárul a saját fogyasztói, minél meredekebb a Dm görbéje az exportőrök Sx görbéjéhez képest",
      },
      { label: "d", text: "megoszlanak a saját fogyasztói és az exportőrök között fele-fele arányban" },
    ],
    correct: "a",
  },
  {
    id: "3-13",
    chapter: 3,
    question: "A nagy ország által bevezetett importkorlátozás terhei",
    options: [
      { label: "a", text: "teljes egészében a saját fogyasztóira hárulnak" },
      { label: "b", text: "teljes egészében az exportőrökre hárulnak" },
      {
        label: "c",
        text: "megoszlanak a saját fogyasztói és az exportőrök között, és annál nagyobb teher hárul a saját fogyasztói, minél meredekebb a Dm görbéje az exportőrök Sx görbéjéhez képest",
      },
      { label: "d", text: "megoszlanak a saját fogyasztói és az exportőrök között fele-fele arányban" },
    ],
    correct: "c",
  },
  {
    id: "3-14",
    chapter: 3,
    question: "A kvóta alkalmazásának egyik előnye a vámmal szemben, hogy",
    options: [
      { label: "a", text: "javítja az ország nemzetközi cserearányát (ha a kvótajáradék külföldre kerül)" },
      { label: "b", text: "adminisztratív eszköz, mert az államnak kell kijelölnie az importőröket" },
      { label: "c", text: "a vám jobban meglazítja a kapcsolatot a belföldi és a világpiaci ár között mint a kvóta" },
      { label: "d", text: "erősebbe teszi a kapcsolatot a belföldi és a világpiaci ár között, mint a vám" },
    ],
    correct: "b",
  },
  {
    id: "3-15",
    chapter: 3,
    question: "Az exporttámogatás",
    options: [
      { label: "a", text: "nem számít protekcionista eszköznek" },
      { label: "b", text: "rontja a támogatást adó ország nemzetközi cserearányait, ha az exportőr nagy ország" },
      {
        label: "c",
        text: "mivel javítja az importőr országok jólétét, ezt melegen üdvözlik, és nem alkalmaznak sohasem ellenintézkedéseket ilyen esetben",
      },
      {
        label: "d",
        text: "csak akkor rontja az exportőr országban az erőforrások elosztásának hatékonyságát, ha a komparatív hátrányban lévő termékük kivitelét támogatják",
      },
    ],
    correct: "b",
  },
  {
    id: "3-16",
    chapter: 3,
    question: "Az exportkvóta hátrányos",
    options: [
      { label: "a", text: "a termék hazai termelőinek, mert növeli a termelői többletüket" },
      { label: "b", text: "a termék hazai fogyasztóinak, mert növeli a termelői többletüket" },
      { label: "c", text: "nemzetgazdasági szinten, mert a jóléti növekedéssel jár" },
      { label: "d", text: "az állami költségvetésnek, mert csökkenti a bevételeit" },
    ],
    correct: "d",
  },
  {
    id: "3-17",
    chapter: 3,
    question: "Az önkéntes exportkorlátozás valójában … érdekeit",
    options: [
      { label: "a", text: "az exportőr ország kivitelre dolgozó termelőinek" },
      { label: "b", text: "az importőr ország fogyasztóinak" },
      { label: "c", text: "az importőr ország importtal versengő termelőinek" },
      { label: "d", text: "az exportőr ország fogyasztóinak" },
    ],
    correct: "c",
  },
  {
    id: "3-18",
    chapter: 3,
    question: "Az effektív védelem mértéke azt mutatja meg, hogy a megvédett ágazatban hány százalékkal",
    options: [
      { label: "a", text: "drágul meg a termék a felhasználók számára" },
      { label: "b", text: "változik meg a hozzáadott érték a teljes védelmi rendszer hatására" },
      { label: "c", text: "nő a hazai termelés a teljes védelmi rendszer hatására" },
      { label: "d", text: "lesz olcsóbb a termék a felhasználók számára" },
    ],
    correct: "c",
  },
  {
    id: "3-19",
    chapter: 3,
    question: "A hozzáadott érték változását x termék termelésében",
    options: [
      { label: "a", text: "x termék nominális védelme mutatja" },
      { label: "b", text: "x termék effektív védelme mutatja" },
      { label: "c", text: "az a, és a b, válasz is helyes" },
      { label: "d", text: "az összes fenti válasz hamis" },
    ],
    correct: "b",
  },
  {
    id: "3-20",
    chapter: 3,
    question:
      "Ha egy kis ország 20%-os vámmal terheli x termék behozatalát, és átlagosan 20% vámot alkalmaz az x termék anyagi inputjának behozatalára is, akkor nála az x termék effektív védelme:",
    options: [
      { label: "a", text: "g=0%" },
      { label: "b", text: "g=10%" },
      { label: "c", text: "g=20%" },
      { label: "d", text: "az összes fenti válasz hamis" },
    ],
    correct: "c",
  },
  // Fejezet 4
  {
    id: "4-1",
    chapter: 4,
    question: "Nemzetközi munkaerő-áramlás hatására a magas autark reálbérű országban csökken",
    options: [
      { label: "a", text: "reálbér" },
      { label: "b", text: "GDP" },
      { label: "c", text: "GNI" },
      { label: "d", text: "az a) és a b) válasz is helyes" },
    ],
    correct: "a",
  },
  {
    id: "4-2",
    chapter: 4,
    question: "A nemzetközi munkaerő-áramlás hatására az alacsony autark reálbérű országban csökken",
    options: [
      { label: "a", text: "reálbér" },
      { label: "b", text: "GDP" },
      { label: "c", text: "GNI" },
      { label: "d", text: "mindegyik fenti válasz hamis" },
    ],
    correct: "b",
  },
  {
    id: "4-3",
    chapter: 4,
    question: "Nemzetközi munkaerő-áramlás hatására a magas autark reálbérű országban nő",
    options: [
      { label: "a", text: "reálbér" },
      { label: "b", text: "GDP" },
      { label: "c", text: "GNI" },
      { label: "d", text: "a b) és a c) válasz is helyes" },
    ],
    correct: "d",
  },
  {
    id: "4-4",
    chapter: 4,
    question: "A nemzetközi munkaerő-áramlás vesztesei az alacsony autark reálbérrel rendelkező országban",
    options: [
      { label: "a", text: "hazai munkások" },
      { label: "b", text: "hazai tőkések" },
      { label: "c", text: "mindkét fenti válasz helyes" },
      { label: "d", text: "egyik fenti válasz sem helyes" },
    ],
    correct: "b",
  },
  {
    id: "4-5",
    chapter: 4,
    question: "A munkások külföldre áramlása akkor hátrányos gazdaságilag a kiküldő ország számára, ha",
    options: [
      { label: "a", text: "a külföldre menők előzőleg munkanélküliek voltak otthon" },
      {
        label: "b",
        text: "a külföldre távozókat vendégmunkás jelleggel foglalkoztatják magasabb bérszínvonalú országokban",
      },
      { label: "c", text: "képzett munkavállalóik idénymunkát vállalnak külföldön" },
      { label: "d", text: "az összes fentebbi válasz helyes" },
    ],
    correct: "d",
  },
  {
    id: "4-6",
    chapter: 4,
    question:
      "Ha az elmaradott országokból magasan képzett szakemberek vándorolnak ki véglegesen, akkor a kibocsátó országban keletkező veszteség",
    options: [
      { label: "a", text: "jól mérhető e szakemberek által megkeresett hazai bérjövedelem nagyságával" },
      { label: "b", text: "legtöbbször jóval nagyobb, mint e szakemberek hazai fizetése" },
      { label: "c", text: "jellemző módon kisebb, mint e szakemberek hazai fizetése" },
      { label: "d", text: "nem függ e szakemberek kiképzési költségeitől" },
    ],
    correct: "b",
  },
  {
    id: "4-7",
    chapter: 4,
    question:
      "A munkaerő nemzetközi mozgása akkor növelheti a befogadó és a kiküldő ország együttes GNP-mutatóját, ha a munkaerőmozgás megindulása előtt",
    options: [
      { label: "a", text: "a befogadó országban magasabb a munka határterméke" },
      { label: "b", text: "a kiküldő országban magasabb a munka határterméke" },
      { label: "c", text: "egyforma a két országban a munka határterméke" },
      { label: "d", text: "a fentebbi esetekben egyaránt növelheti az együttes GDP-t" },
    ],
    correct: "a",
  },
  {
    id: "4-8",
    chapter: 4,
    question: "Egy ország biztosan jövedelemveszteséget szenved, ha saját aktív lakosságának egy része",
    options: [
      { label: "a", text: "vendégmunkásként külföldön dolgozik magasabb bérszínvonalú országban" },
      {
        label: "b",
        text: "véglegesen áttelepül külföldre, de ottani jövedelméből hazautal valamennyit az otthon maradó rokonoknak",
      },
      { label: "c", text: "véglegesen áttelepül külföldre, és ottani jövedelméből nem utal haza pénzösszeget" },
      { label: "d", text: "mindhárom fentebbi válasz hamis" },
    ],
    correct: "c",
  },
  {
    id: "4-9",
    chapter: 4,
    question: "Ha a szlovák állampolgárok német államkötvényeket vásárolnak, akkor ez a",
    options: [
      { label: "a", text: "a szlovák fizetési mérlegben szolgáltatásexportként jelenik meg" },
      { label: "b", text: "a szlovák fizetési mérleg tőkemérlegében tartozásként jelenik meg" },
      { label: "c", text: "csökkenti a nemzeti bank devizatartalékát" },
      { label: "d", text: "a német fizetési mérleg tőkemérlegébe tartozásként kerül be" },
    ],
    correct: "b",
  },
  {
    id: "4-10",
    chapter: 4,
    question: "Amennyiben egy ország élelmiszer formájában segélyt kap az Európai Uniótól, ezt a tranzakciót",
    options: [
      {
        label: "a",
        text: "az 1. Sor Termékek sorának Tartozik oldalára, valamint a 4. Sor Viszonzatlan folyó átutalások Követel oldalra kell elkönyvelni",
      },
      {
        label: "b",
        text: "az 1. Sor Termékek sorának Követel oldalára, valamint a 4. Sor Viszonzatlan folyó átutalások Követel oldalra kell elkönyvelni",
      },
      {
        label: "c",
        text: "az 1. Sor Termékek sorának Tartozik oldalára, valamint a 4. Sor Viszonzatlan folyó átutalások Tartozik oldalára kell elkönyvelni",
      },
      {
        label: "d",
        text: "az 1. Sor Termékek sorának Követel oldalára, valamint a 4. Sor Viszonzatlan folyó átutalások Tartozik oldalára kell elkönyvelni",
      },
    ],
    correct: "a",
  },
  {
    id: "4-11",
    chapter: 4,
    question: "Ha Szlovákiában a nemzetközi tartalékváltozás egyenlege -1 millió $, akkor",
    options: [
      { label: "a", text: "a devizatartalékok 1 millió $-ral csökkentek" },
      { label: "b", text: "a devizatartalékok 1 millió $-ral emelkedtek" },
      { label: "c", text: "a teljes fizetési mérleg 1 millió $ többlettel zárt" },
      { label: "d", text: "az a) és c) válasz is helyes" },
    ],
    correct: "a",
  },
  {
    id: "4-12",
    chapter: 4,
    question:
      "Ha egy hazai bank külföldi államkötvényeket vásárol, akkor a szlovák fizetési mérlegben az államkötvények vásárlását 1. ... és a vele kapcsolatos pénz mozgását 2. ... kell elkönyvelni.",
    options: [
      { label: "a", text: "1. a tőkemérleg Követel oldalára, 2. a pénzügyi mérleg Tartozik oldalára" },
      { label: "b", text: "1. a pénzügyi mérleg Tartozik oldalára, 2. a pénzügyi mérleg Követel oldalára" },
      { label: "c", text: "1. a tőkemérleg Tartozik oldalára, 2. a tőkemérleg Követel oldalára" },
      { label: "d", text: "1. a pénzügyi mérleg Követel oldalára, 2. a tőkemérleg Tartozik oldalára" },
    ],
    correct: "b",
  },
  {
    id: "4-13",
    chapter: 4,
    question: "Ha a SZNB 310 forintot vásárol 1 euróért a devizapiacon, akkor a szlovák fizetési mérlegben",
    options: [
      { label: "a", text: "a 310 forintot és az 1 eurót is a nemzetközi tartalékváltozások rovatba kell bevezetni" },
      {
        label: "b",
        text: "csak a 310 forintot kell bevezetni a nemzetközi tartalékváltozások rovatba, mert az 1 euró a jegybanki mérlegbe kerül",
      },
      {
        label: "c",
        text: "a 310 forintot a nemzetközi tartalékváltozások rovatba kell bevezetni, az 1 eurót pedig az egyéb befektetések rovatba",
      },
      { label: "d", text: "ebből a tranzakcióból nem lesz bejegyzés, csak a jegybanki mérlegben" },
    ],
    correct: "c",
  },
  {
    id: "4-14",
    chapter: 4,
    question: "A hazai folyó fizetési mérleg Tartozik (-) oldalára kell könyvelni a következő tételt",
    options: [
      { label: "a", text: "Magyar turista költségei a Magas-Tátrában" },
      { label: "b", text: "Szlovák turista költségei a Balaton parton" },
      { label: "c", text: "Hazai vendégmunkások jövedelme külföldön" },
      { label: "d", text: "Külföldön működő hazai vállalatok profitja" },
    ],
    correct: "b",
  },
  {
    id: "4-15",
    chapter: 4,
    question: "A külgazdasági egyensúly állapotát",
    options: [
      { label: "a", text: "a folyó fizetési mérleg rövid távú egyenlege mutatja" },
      { label: "b", text: "a folyó fizetési mérleg hosszú távú egyenlege mutatja" },
      { label: "c", text: "a tőkemérleg hosszú távú egyenlege mutatja" },
      { label: "d", text: "a teljes fizetési mérleg hosszú távú egyenlege mutatja" },
    ],
    correct: "b",
  },
  {
    id: "4-16",
    chapter: 4,
    question: "Az alábbi azonosságok közül helyes",
    options: [
      { label: "a", text: "GDP=C+I+G+NX" },
      { label: "b", text: "GNDI=C+G+I+NX+NY" },
      { label: "c", text: "GNI=C+I+G+NX" },
      { label: "d", text: "CA≡GNDI-(C + I)" },
    ],
    correct: "a",
  },
  {
    id: "4-17",
    chapter: 4,
    question: "Amennyiben adott ország esetében NFI>0 és KA=0, akkor",
    options: [
      { label: "a", text: "GDP nagyobb, mint GNI" },
      { label: "b", text: "GNI nagyobb, mint GNDI" },
      { label: "c", text: "GNDI nagyobb, mint a belföldi felhasználás (C+I+G)" },
      { label: "d", text: "mindegyik fenti válasz hamis" },
    ],
    correct: "c",
  },
  {
    id: "4-18",
    chapter: 4,
    question: "Amennyiben a fizetési mérlegben CA+KA<0",
    options: [
      { label: "a", text: "NFI>0" },
      { label: "b", text: "NFI<0" },
      { label: "c", text: "ez megnövelte az ország külföldi aktíváit, vagy csökkentette passzíváit" },
      { label: "d", text: "az a) és a c) válasz is helyes" },
    ],
    correct: "b",
  },
  {
    id: "4-19",
    chapter: 4,
    question: "A GNDI azonosság értelmében",
    options: [
      { label: "a", text: "GNDI= GDP+NY" },
      { label: "b", text: "GNDI= GDP+NY+NCT" },
      { label: "c", text: "GNDI= GNI+NCT" },
      { label: "d", text: "a b) és a c) válasz is helyes" },
    ],
    correct: "d",
  },
  {
    id: "4-20",
    chapter: 4,
    question: "A GNI azonosság értelmében",
    options: [
      { label: "a", text: "GNI=C+I+G+NX" },
      { label: "b", text: "GNI=C+I+G+NX+NY" },
      { label: "c", text: "GNI=C+I+G+NX+NY+NCT" },
      { label: "d", text: "GNI=GDP+NY+NCT" },
    ],
    correct: "b",
  },
]
