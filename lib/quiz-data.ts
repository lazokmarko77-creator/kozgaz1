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
  {
  id: "5-1",
  chapter: 5,
  question: "Mi az alapvető szerepe a nemzeti banknak a valutapiacon?",
  options: [
    { label: "A", text: "Tőlük származik a külföldi valuták kínálata, és ők ennek végső felhasználói." },
    { label: "B", text: "Nem sok, mert a kereskedelmi bankok utasításait hajtják végre." },
    { label: "C", text: "Közvetítő tevékenységükkel nagymértékben csökkentik a valutáris ügyletek tranzakciós költségeit." },
    { label: "D", text: "Árfolyam-szabályozó szerepet töltenek be." }
  ],
  correct: "D"
},
{
  id: "5-2",
  chapter: 5,
  question: "Opciós ügyletnek hívjuk, ha",
  options: [
    { label: "A", text: "az árfolyamkockázat kivédésére 30 napos határidőre veszünk devizát" },
    { label: "B", text: "tőzsdén december 15-i lejáratra határidős ügyletet kötünk" },
    { label: "C", text: "jogot szerzünk arra, hogy meghatározott mennyiségű devizát rögzített áron, meghatározott lejáratig megvásároljunk" },
    { label: "D", text: "azonnali devizaeladást határidős visszavásárlással kapcsoljuk össze" }
  ],
  correct: "C"
},
{
  id: "5-3",
  chapter: 5,
  question: "Swap ügyletről akkor beszélünk, ha",
  options: [
    { label: "A", text: "az árfolyamkockázat kivédésére 30 napos határidőre veszünk devizát" },
    { label: "B", text: "tőzsdén december 15-i lejáratra határidős ügyletet kötünk" },
    { label: "C", text: "jogot szerzünk arra, hogy meghatározott mennyiségű devizát rögzített áron, meghatározott lejáratig megvásároljunk" },
    { label: "D", text: "azonnali devizaeladást határidős visszavásárlással kapcsoljuk össze" }
  ],
  correct: "D"
},
{
  id: "5-4",
  chapter: 5,
  question: "Futures ügyletnek hívjuk, ha",
  options: [
    { label: "A", text: "az árfolyamkockázat kivédésére 30 napos határidőre veszünk devizát" },
    { label: "B", text: "tőzsdén december 15-i lejáratra határidős ügyletet kötünk" },
    { label: "C", text: "jogot szerzünk arra, hogy meghatározott mennyiségű devizát rögzített áron, meghatározott lejáratig megvásároljunk" },
    { label: "D", text: "azonnali devizaeladást határidős visszavásárlással kapcsoljuk össze" }
  ],
  correct: "B"
},
{
  id: "5-5",
  chapter: 5,
  question: "A hazai valuta szabad lebegtetése esetén",
  options: [
    { label: "A", text: "léteznek hivatalos valutaárfolyamok" },
    { label: "B", text: "a jegybanki tartalékváltozások fizetési mérleg rovatába nem kerül tétel" },
    { label: "C", text: "ki kell jelölni a hivatalos ingadozási sávot" },
    { label: "D", text: "jelentős valutatartalékot kell felhalmoznia a jegybanknak" }
  ],
  correct: "B"
},

{
  id: "5-6",
  chapter: 5,
  question: "Mi a szabad lebegtetésnek, mint árfolyamrendszernek a poláris ellentéte?",
  options: [
    { label: "A", text: "piszkos lebegtetés" },
    { label: "B", text: "kemény rögzítés" },
    { label: "C", text: "puha rögzítés" },
    { label: "D", text: "kötött devizagazdálkodás" }
  ],
  correct: "B"
},
{
  id: "5-7",
  chapter: 5,
  question: "Piszkos (menedzselt) lebegtetés esetén",
  options: [
    { label: "A", text: "kihirdetnek hivatalos valutaárfolyamot" },
    { label: "B", text: "létezik jegybanki intervenciós kötelezettség" },
    { label: "C", text: "a jegybank nem képes a piaci árfolyam szabályozására" },
    { label: "D", text: "a jegybank időnként beavatkozik árfolyam-szabályozási céllal" }
  ],
  correct: "D"
},
{
  id: "5-8",
  chapter: 5,
  question: "A hazai valuta szabad lebegése esetén",
  options: [
    { label: "A", text: "a jegybank hivatalos árfolyamot tesz közzé" },
    { label: "B", text: "a fiskális és monetáris politika erősen hat az árfolyamra" },
    { label: "C", text: "hivatalos ingadozási sávot határoznak meg" },
    { label: "D", text: "jelentős tartalék felhalmozása szükséges" }
  ],
  correct: "B"
},
{
  id: "5-9",
  chapter: 5,
  question: "Radikális intézményi megoldás nélkül mely árfolyamrendszer fenntartása a legnehezebb?",
  options: [
    { label: "A", text: "tiszta lebegtetés" },
    { label: "B", text: "menedzselt lebegtetés" },
    { label: "C", text: "kemény rögzítés" },
    { label: "D", text: "puha rögzítés" }
  ],
  correct: "C"
},
{
  id: "5-10",
  chapter: 5,
  question: "Ha a jegybank valutát vásárol intervenció során",
  options: [
    { label: "A", text: "a monetáris bázis és pénzkínálat nő" },
    { label: "B", text: "a monetáris bázis nő, a pénzkínálat csökken" },
    { label: "C", text: "a monetáris bázis csökken, a pénzkínálat nő" },
    { label: "D", text: "mindkettő csökken" }
  ],
  correct: "A"
},
{
  id: "5-11",
  chapter: 5,
  question: "A határidős árfolyam információt ad",
  options: [
    { label: "A", text: "a jövőbeli azonnali árfolyamról" },
    { label: "B", text: "a jelenbeli árfolyam-várakozásokról" },
    { label: "C", text: "mindkettőről" },
    { label: "D", text: "egyikről sem" }
  ],
  correct: "B"
},
{
  id: "5-12",
  chapter: 5,
  question: "A hazai pénznem reálértelemben felértékelődik, ha",
  options: [
    { label: "A", text: "emelkedik a nominális árfolyam" },
    { label: "B", text: "nő a hazai árszínvonal" },
    { label: "C", text: "csökken a külföldi kamatláb" },
    { label: "D", text: "A és C" }
  ],
  correct: "B"
},
{
  id: "5-13",
  chapter: 5,
  question: "Szabad tőkeáramlás és tökéletes helyettesítés mellett kiegyenlítődik",
  options: [
    { label: "A", text: "kamatláb" },
    { label: "B", text: "kockázattal korrigált kamatláb" },
    { label: "C", text: "várt hozam nemzeti valutában" },
    { label: "D", text: "várt hozam egy valutára átszámítva" }
  ],
  correct: "D"
},
{
  id: "5-14",
  chapter: 5,
  question: "A fedezetlen kamatparitás biztos eleme",
  options: [
    { label: "A", text: "hazai infláció" },
    { label: "B", text: "határidős árfolyam" },
    { label: "C", text: "várt árfolyam" },
    { label: "D", text: "külföldi infláció" }
  ],
  correct: "C"
},
{
  id: "5-15",
  chapter: 5,
  question: "Magasabb hazai kamat mellett az UIP akkor teljesül, ha",
  options: [
    { label: "A", text: "leértékelődést várnak" },
    { label: "B", text: "felértékelődést várnak" },
    { label: "C", text: "reálfelértékelődést várnak" },
    { label: "D", text: "egyik sem" }
  ],
  correct: "A"
},
{
  id: "5-16",
  chapter: 5,
  question: "A valuták tökéletes helyettesítése akkor áll fenn, ha",
  options: [
    { label: "A", text: "azonos méretűek" },
    { label: "B", text: "azonos nominális hozamot ígérnek saját valutában" },
    { label: "C", text: "azonos címletűek" },
    { label: "D", text: "azonos hozamot ígérnek hazai valutában" }
  ],
  correct: "D"
},
{
  id: "5-17",
  chapter: 5,
  question: "Tökéletes helyettesíthetőség azt jelenti, hogy",
  options: [
    { label: "A", text: "azonos kockázat és likviditás" },
    { label: "B", text: "azonos várt hozam két valutában" },
    { label: "C", text: "azonos ex post hozam" },
    { label: "D", text: "mindegyik" }
  ],
  correct: "A"
},
{
  id: "5-18",
  chapter: 5,
  question: "Devizapiaci egyensúlyban",
  options: [
    { label: "A", text: "a keresletet csak a várt hozam határozza meg" },
    { label: "B", text: "a forward = spot" },
    { label: "C", text: "nominális = reálhozam" },
    { label: "D", text: "azonos hozam azonos valutában" }
  ],
  correct: "D"
},
{
  id: "5-19",
  chapter: 5,
  question: "Mennyi a spot árfolyam adott kamatok mellett?",
  options: [
    { label: "A", text: "0,64 €/$" },
    { label: "B", text: "0,64 $/€" },
    { label: "C", text: "0,763 €/$" },
    { label: "D", text: "0,763 $/€" }
  ],
  correct: "A"
},
{
  id: "5-20",
  chapter: 5,
  question: "Határidős prémium esetén",
  options: [
    { label: "A", text: "felértékelődést várnak" },
    { label: "B", text: "forward > spot" },
    { label: "C", text: "UIP nem teljesül" },
    { label: "D", text: "eurókamat magasabb" }
  ],
  correct: "A"
},
  {
    id: "6-1",
    chapter: 6,
    question: "Tegyük fel, hogy egy tábla Milka csoki kiskereskedelmi ára Szlovákiában 1,30€, Magyarországon pedig 330 forint. Erre a termékre akkor teljesül az egységes ár elve, ha az árfolyam",
    options: [
      { label: "A", text: "0,004€/Ft" },
      { label: "B", text: "0,004Ft/€" },
      { label: "C", text: "254€/Ft" },
      { label: "D", text: "A B és a C válasz is helyes" }
    ],
    correct: "A"
  },
  {
    id: "6-2",
    chapter: 6,
    question: "Az abszolút vásárlóerő-paritás teljesülése azt jelenti, hogy",
    options: [
      { label: "A", text: "a reálárfolyam időben stabil" },
      { label: "B", text: "a kereskedelmi javak árszínvonala belföldön és külföldön kiegyenlítődik" },
      { label: "C", text: "a hazai és a külföldi árukosár azonos pénznemben számítva ugyanannyiba kerül" },
      { label: "D", text: "a közös valutában mért hazai és külföldi árszínvonal aránya időben nem változhat" }
    ],
    correct: "C"
  },
  {
    id: "6-3",
    chapter: 6,
    question: "Ha érvényesül az abszolút PPP, akkor az egységes ár elve",
    options: [
      { label: "A", text: "lehet, hogy egyetlen termék esetében sem teljesül" },
      { label: "B", text: "minden termékre teljesül" },
      { label: "C", text: "néhány termékre nézve biztosan teljesül" },
      { label: "D", text: "csak egy termékre nézve teljesül" }
    ],
    correct: "A"
  },
  {
    id: "6-4",
    chapter: 6,
    question: "A relatív vásárlóerő-paritás kritériuma szerint",
    options: [
      { label: "A", text: "a hazai és a külföldi árukosár azonos pénznemben számítva ugyanannyiba kerül" },
      { label: "B", text: "a reálárfolyamnak egynek kell lennie" },
      { label: "C", text: "a közös valutában mért hazai és külföldi árszínvonal aránya időben nem változhat" },
      { label: "D", text: "a reálárfolyam időben változó" }
    ],
    correct: "C"
  },
  {
    id: "6-5",
    chapter: 6,
    question: "Tegyük fel, hogy a reálárfolyam értéke 1-től kisebb egy adott időpontban. Ez azt jelenti, hogy",
    options: [
      { label: "A", text: "külföldi pénznem felülértékelt a hazaival szemben" },
      { label: "B", text: "külföld relatíve drágább, mint a hazai ország" },
      { label: "C", text: "külföld relatíve olcsóbb, mint a hazai ország" },
      { label: "D", text: "a hazai pénznem alulértékelt a külföldivel szemben" }
    ],
    correct: "C"
  },
  {
    id: "6-6",
    chapter: 6,
    question: "Vegyünk két országot, melyeknél a hivatalos pénznem az euró. Tegyük fel, hogy hosszú időn át azonos a két országban az inflációs ráta. Ebből az következik, hogy rájuk vonatkozóan",
    options: [
      { label: "A", text: "teljesül az abszolút PPP" },
      { label: "B", text: "teljesül a relatív PPP" },
      { label: "C", text: "az A és a B válasz is helyes" },
      { label: "D", text: "az összes fenti válasz hamis" }
    ],
    correct: "B"
  },
  {
    id: "6-7",
    chapter: 6,
    question: "Ha standard árukosár ugyanannyiba kerül A és B országban közös pénznemre átszámítva, és ez a helyzet hosszú időn keresztül fennmarad, akkor kettejüknél",
    options: [
      { label: "A", text: "széles körben teljesül az egységes ár elve" },
      { label: "B", text: "teljesül az abszolút PPP" },
      { label: "C", text: "teljesül a relatív PPP" },
      { label: "D", text: "a B és a C válasz is helyes" }
    ],
    correct: "D"
  },
  {
    id: "6-8",
    chapter: 6,
    question: "A valutaárfolyam monetáris megközelítése feltétele",
    options: [
      { label: "A", text: "a fedezett kamatparitás feltétel teljesülése" },
      { label: "B", text: "az abszolút PPP elmélet teljesülése" },
      { label: "C", text: "rögzített az árfolyamrendszer" },
      { label: "D", text: "a Balassa-Samuelson hatás" }
    ],
    correct: "B"
  },
  {
    id: "6-9",
    chapter: 6,
    question: "Az árfolyam monetáris megközelítése szerint felértékelődik a hazai valuta, ha ceteris paribus",
    options: [
      { label: "A", text: "nő a külföldi reál pénzkereslet" },
      { label: "B", text: "nő a belföldi reál pénzkereslet" },
      { label: "C", text: "csökken a külföldi nominális pénzkínálat" },
      { label: "D", text: "nő a hazai nominális pénzkínálat" }
    ],
    correct: "B"
  },
  {
    id: "6-10",
    chapter: 6,
    question: "A monetáris megközelítés szerint a nominális árfolyam mozgása függ",
    options: [
      { label: "A", text: "a belföldi és a külföldi reál pénzkereslet relatív változásától" },
      { label: "B", text: "a belföldi és a külföldi nominális pénzkínálat relatív változásától" },
      { label: "C", text: "az A és a B válasz is helyes" },
      { label: "D", text: "az összes fenti válasz hamis" }
    ],
    correct: "C"
  },
  {
    id: "6-11",
    chapter: 6,
    question: "Ragadós árak esetén a nominális és a reálárfolyam rövid távon",
    options: [
      { label: "A", text: "egyidejű, egyirányú és nagyjából azonos arányú kilengéseket végez." },
      { label: "B", text: "egyidejű, de ellenkező irányú és nagyjából azonos arányú kilengéseket végez." },
      { label: "C", text: "egyirányú és nagyjából azonos arányú kilengéseket végez, de a reálárfolyam időbeli késéssel követi a nominális árfolyam." },
      { label: "D", text: "nem mozog együtt, mert a nominális árfolyam sokkal nagyobb arányú kilengéseket mutat, mint a reálárfolyam." }
    ],
    correct: "A"
  },
  {
    id: "6-12",
    chapter: 6,
    question: "Ha egy valuta nominálisan leértékelődik egy bizonyos időtávon, akkor ez már önmagában kizárja",
    options: [
      { label: "A", text: "az abszolút PPP teljesülését" },
      { label: "B", text: "a relatív PPP teljesülését" },
      { label: "C", text: "az A és a B válasz is helyes" },
      { label: "D", text: "az összes fenti válasz hamis" }
    ],
    correct: "D"
  },
  {
    id: "6-13",
    chapter: 6,
    question: "Ha egy valuta reálértelemben felértékelődik egy bizonyos időtávon, akkor ez már önmagában kizárja",
    options: [
      { label: "A", text: "az abszolút PPP teljesülését valamelyik időpontban az időszak alatt" },
      { label: "B", text: "a relatív PPP teljesülését az időszak alatt" },
      { label: "C", text: "az A és a B válasz is helyes" },
      { label: "D", text: "az összes fenti válasz hamis" }
    ],
    correct: "D"
  },
  {
    id: "6-14",
    chapter: 6,
    question: "A pénzmennyiség tartósnak igérkező megváltoztatása rövid távon azért hat a valutaárfolyamra lebegtetés esetén, mert befolyásolja",
    options: [
      { label: "A", text: "a nominális kamatlábat" },
      { label: "B", text: "az árfolyam-várakozásokat" },
      { label: "C", text: "az árszínvonalat" },
      { label: "D", text: "az A és a B válasz is helyes" }
    ],
    correct: "D"
  },
  {
    id: "6-15",
    chapter: 6,
    question: "A pénzmennyiség tartósnak igérkező megváltoztatása hosszú távon azért hat a valutaárfolyamra lebegtetés esetén, mert befolyásolja",
    options: [
      { label: "A", text: "az árszínvonalat" },
      { label: "B", text: "az árfolyam-várakozásokat" },
      { label: "C", text: "a nominális kamatlábat" },
      { label: "D", text: "az A és a B válasz is helyes" }
    ],
    correct: "D"
  },
  {
    id: "6-16",
    chapter: 6,
    question: "A Balassa-Samuelson-hatás érvényesülése esetén a vizsgált időszakban",
    options: [
      { label: "A", text: "a külföldi gazdaság termelékenységi szintje magasabb volt a hazainál." },
      { label: "B", text: "a külföldi gazdaság termelékenységi szintje gyorsabban emelkedett, mint a hazai" },
      { label: "C", text: "a hazai gazdaság felzárkózott a külföldihez." },
      { label: "D", text: "a hazai gazdaság termelékenységi szintje magasabb volt, és előnye az időszak során nem változott" }
    ],
    correct: "D"
  },
  {
    id: "6-17",
    chapter: 6,
    question: "Ha a gazdasági növekedés ceteris paribus lassabb belföldön, mint külföldön, akkor ez a valutaárfolyam monetáris megközelítése szerint lebegő árfolyamrendszerben",
    options: [
      { label: "A", text: "a külföldi pénznem felértékelődéséhez vezet" },
      { label: "B", text: "a hazai pénznem felértékelődéséhez vezet" },
      { label: "C", text: "csökkenti a nominális árfolyamot" },
      { label: "D", text: "a külföldi pénznem leértékeléséhez vezet" }
    ],
    correct: "A"
  },
  {
    id: "6-18",
    chapter: 6,
    question: "Tegyük fel, hogy a kereskedelmi javak esetében külföldön nagyobb a termelékenység, mint belföldön, de ez a különbség folyamatosan csökken. Ekkor a Balassa-Samuelson hatás szerint a hazai pénznem reálárfolyama",
    options: [
      { label: "A", text: "1-nél kisebb, de folyamatosan nő" },
      { label: "B", text: "1-nél nagyobb, de folyamatosan csökken" },
      { label: "C", text: "1-nél nagyobb, de folyamatosan nő" },
      { label: "D", text: "1-nél kisebb, és folyamatosan csökken" }
    ],
    correct: "B"
  },
  {
    id: "6-19",
    chapter: 6,
    question: "Ha a hazai és a külföldi reprezentatív árukosár összetétele jelentősen különbözik egymástól, de minden termékre nézve teljesül az egységes ár elve hosszú távon keresztül, akkor a két pénznemre",
    options: [
      { label: "A", text: "biztosan teljesül az abszolút PPP" },
      { label: "B", text: "biztosan teljesül a relatív PPP" },
      { label: "C", text: "az A és a B válasz is helyes" },
      { label: "D", text: "az összes fenti válasz hamis" }
    ],
    correct: "D"
  },
  {
    id: "6-20",
    chapter: 6,
    question: "Monetáris sokkok esetén a túllendülést mutató változó",
    options: [
      { label: "A", text: "nominális kamatláb" },
      { label: "B", text: "az árszínvonal" },
      { label: "C", text: "a nominális árfolyam" },
      { label: "D", text: "a nominális pénzmennyiség" }
    ],
    correct: "C"
  },
  {
    id: "7-1",
    chapter: 7,
    question: "A rugalmassági megközelítés azt tárgyalja, hogyan hat az árfolyamváltozás",
    options: [
      { label: "A", text: "a nettó export megváltoztatásán keresztül az aggregált keresletre és a hazai jövedelem alakulására" },
      { label: "B", text: "a külkereskedelmi forgalomba kerülő termékek árára, és ezáltal a nettó export értékére" },
      { label: "C", text: "a hazai árszínvonalra és inflációra" },
      { label: "D", text: "az összes fenti válasz helyes" }
    ],
    correct: "B"
  },
  {
    id: "7-2",
    chapter: 7,
    question: "Az árfolyamváltozás megváltoztatja",
    options: [
      { label: "A", text: "az importjavak árát külföldi pénznemben számítva" },
      { label: "B", text: "az importjavak árát belföldi pénznemben számítva" },
      { label: "C", text: "az exporttermék árát külföldi pénznemben számítva" },
      { label: "D", text: "a B és a C válasz is helyes" }
    ],
    correct: "D"
  },
  {
    id: "7-3",
    chapter: 7,
    question: "A rugalmassági megközelítés keretén belül csak",
    options: [
      { label: "A", text: "a javak és szolgáltatások nemzetközi áramlását vizsgáljuk" },
      { label: "B", text: "az előzőeken kívül a tényezőjövedelmek nemzetközi áramlását is vizsgáljuk" },
      { label: "C", text: "a fentiek mellett a transzferek nemzetközi áramlását is vizsgáljuk" },
      { label: "D", text: "csak a javak nemzetközi áramlását vizsgáljuk" }
    ],
    correct: "A"
  },
  {
    id: "7-4",
    chapter: 7,
    question: "Tegyük fel, hogy az exportkínálat árrugalmassága Nx=0,7. Ha emellett a hazai pénznem 1%-kal leértékelődik, akkor változatlan jövedelemszint és árszínvonal mellett az exportbevétel összege hazai pénznemben számítva",
    options: [
      { label: "A", text: "1%-kal csökken" },
      { label: "B", text: "0,3%-al nő" },
      { label: "C", text: "0,3%-al csökken" },
      { label: "D", text: "0,7%-al nő" }
    ],
    correct: "D"
  },
  {
    id: "7-5",
    chapter: 7,
    question: "Tegyük fel, hogy az importkereslet árrugalmassága Nm=0,4, és 1%-kal felértékelődött a hazai pénznem. A következmény a rugalmassági megközelítés modelljében az lesz, hogy",
    options: [
      { label: "A", text: "0,4%-kal csökken az importált javak mennyisége" },
      { label: "B", text: "0,4%-kal nő az importált javak mennyisége" },
      { label: "C", text: "1%-kal nő az importált javak belföldi ára" },
      { label: "D", text: "0,4%-kal csökken az importált javak összértéke külföldi pénznemben" }
    ],
    correct: "B"
  },
  {
    id: "7-6",
    chapter: 7,
    question: "A hazai valuta felértékelődése biztosan növeli a rugalmassági megközelítés feltevései mellett",
    options: [
      { label: "A", text: "az export hazai valutában számított értékét" },
      { label: "B", text: "az export külföldi valutában számított értékét" },
      { label: "C", text: "az import hazai valutában számított értékét" },
      { label: "D", text: "az import külföldi valutában számított értékét" }
    ],
    correct: "D"
  },
  {
    id: "7-7",
    chapter: 7,
    question: "Ha a belföldi valuta reálértelemben leértékelődik és teljesül a Marshall–Lerner feltétel, akkor az import értéke hazai termékmennyiségben kifejezve",
    options: [
      { label: "A", text: "biztosan csökken" },
      { label: "B", text: "biztosan nő" },
      { label: "C", text: "biztosan változatlan marad" },
      { label: "D", text: "nőhet, csökkenhet, de változatlan is maradhat" }
    ],
    correct: "D"
  },
  {
    id: "7-8",
    chapter: 7,
    question: "A fizetési mérleg rugalmassági megközelítésével kapcsolatos fogalom",
    options: [
      { label: "A", text: "túllendülés" },
      { label: "B", text: "kockázati prémium" },
      { label: "C", text: "J-görbe hatás" },
      { label: "D", text: "határidős diszkont" }
    ],
    correct: "C"
  },
  {
    id: "7-9",
    chapter: 7,
    question: "A J-görbe hatás annak köszönhető, hogy az export- és importkereslet",
    options: [
      { label: "A", text: "árrugalmassága az árváltozás után magas, majd fokozatosan csökken" },
      { label: "B", text: "árrugalmassága az árváltozás után nagyon alacsony, majd fokozatosan megnő" },
      { label: "C", text: "árrugalmassága az árváltozás után egy ideig nem változik meg" },
      { label: "D", text: "jövedelemrugalmassága nagyobb 1-nél" }
    ],
    correct: "B"
  },
  {
    id: "7-10",
    chapter: 7,
    question: "A nominális árfolyam megváltozása NEM befolyásolja a folyó fizetési mérleg egyenlegét",
    options: [
      { label: "A", text: "közvetlenül az árfolyamváltozás után, amikor még nem teljesül a Marshall–Lerner feltétel" },
      { label: "B", text: "rövid időtávon, amikor már teljesül a Marshall–Lerner feltétel" },
      { label: "C", text: "hosszú időtávon, amikor már végbemegy az árszínvonal teljes kiigazodása" },
      { label: "D", text: "az összes fenti válasz hamis" }
    ],
    correct: "C"
  },
  {
    id: "7-11",
    chapter: 7,
    question: "Az intertemporális transzformációs görbe",
    options: [
      { label: "A", text: "a jelenbeli és jövőbeli fogyasztói jövedelem közti átváltási lehetőségeket mutatja" },
      { label: "B", text: "meredeksége a tőke jövőbeli határtermékétől függ" },
      { label: "C", text: "origóra konkáv formájú, ha a jövőben állandó mérethozadékú Cobb–Douglas termelési függvény érvényesül" },
      { label: "D", text: "az összes fentebbi válasz helyes" }
    ],
    correct: "D"
  },
  {
    id: "7-12",
    chapter: 7,
    question: "Az intertemporális megközelítés egyszerűsítő feltevései mellett a külkereskedelmi mérleg egyenlege megfelel",
    options: [
      { label: "A", text: "a nemzeti megtakarításnak" },
      { label: "B", text: "a háztartások jövedelem és fogyasztás különbségének" },
      { label: "C", text: "a vállalati megtakarításnak" },
      { label: "D", text: "az állami megtakarításnak" }
    ],
    correct: "B"
  },
  {
    id: "7-13",
    chapter: 7,
    question: "Az intertemporális megközelítés keretei között egységnyi jövőbeli termék értéke jelenbeli termékre számítva",
    options: [
      { label: "A", text: "éppen 1" },
      { label: "B", text: "1+r*" },
      { label: "C", text: "1/(1+r*)" },
      { label: "D", text: "1/r*" }
    ],
    correct: "C"
  },
  {
    id: "7-14",
    chapter: 7,
    question: "Az intertemporális megközelítés modelljében nő a jelenbeli beruházás, ha",
    options: [
      { label: "A", text: "várható technikai újítások kapcsán nő a tőke határterméke" },
      { label: "B", text: "csökken a külföldi reálkamatláb" },
      { label: "C", text: "az A és a B válasz is helyes" },
      { label: "D", text: "az összes fenti válasz hamis" }
    ],
    correct: "C"
  },
  {
    id: "7-15",
    chapter: 7,
    question: "Az intertemporális modell fontos, egyszerűsítő feltevése, hogy",
    options: [
      { label: "A", text: "100 %-os az amortizációs ráta" },
      { label: "B", text: "a vállalatok a visszatartott profitból finanszírozzák beruházásaikat" },
      { label: "C", text: "a második időszakban nincsenek beruházások" },
      { label: "D", text: "az összes fenti válasz helyes" }
    ],
    correct: "D"
  },
  {
    id: "7-16",
    chapter: 7,
    question: "Az intertemporális modell keretei között a kormányzat",
    options: [
      { label: "A", text: "jelenbeli vásárlásait mindenképp behatárolja a jelenbeli adók összege" },
      { label: "B", text: "jövőbeli vásárlásait mindenképp behatárolja a jövőbeli adók összege" },
      { label: "C", text: "a két időszak teljes vásárlásainak jelenértéke pontosan akkora, mint a két időszaki teljes adóbevétel jelenértéke" },
      { label: "D", text: "a két időszak teljes vásárlásainak jelenértéke pontosan akkora, mint a két időszaki teljes adóbevétel jövőértéke" }
    ],
    correct: "C"
  },
  {
    id: "7-17",
    chapter: 7,
    question: "Mit tesznek a jövőbe tekintő racionális fogyasztók az intertemporális megközelítés szerint, ha az állam ceteris-paribus csökkenti a rájuk kivetett jelenbeli adókat?",
    options: [
      { label: "A", text: "Növelik a jelenbeli fogyasztásukat, mert nő a jelenbeli jövedelmük" },
      { label: "B", text: "Csökkentik a jelenbeli fogyasztásukat, mert jövőbeli adóemelést várnak" },
      { label: "C", text: "Növelik a jelenbeli megtakarításukat az adócsökkentés mértékében" },
      { label: "D", text: "Növelik a jelenbeli fogyasztásukat, mert úgy gondolják, hogy amit egyszer elfogyasztottak, azt az állam már nem veheti el tőlük" }
    ],
    correct: "C"
  },
  {
    id: "7-18",
    chapter: 7,
    question: "Tegyük fel, hogy az intertemporális megközelítés modelljében a háztartások jelenbeli jövedelme 1000, várható jövőbeli jövedelme 1400. A világpiaci reálkamatláb pedig 20 %-os. Ezek alapján a háztartások összjövedelmének jövőértéke",
    options: [
      { label: "A", text: "2400" },
      { label: "B", text: "2600" },
      { label: "C", text: "2680" },
      { label: "D", text: "2167" }
    ],
    correct: "B"
  },
  {
    id: "7-19",
    chapter: 7,
    question: "Tegyük fel, hogy az intertemporális modell keretei között a jövőben a külkereskedelmi mérleg egyenlege -360 egység lesz, a világpiaci reálkamatláb 10%-os. Ebből azt a következtetést lehet levonni, hogy NY' egyenlege biztosan",
    options: [
      { label: "A", text: "pozitív" },
      { label: "B", text: "negatív" },
      { label: "C", text: "nulla" },
      { label: "D", text: "lehet pozitív, negatív és nulla is" }
    ],
    correct: "A"
  },
  {
    id: "7-20",
    chapter: 7,
    question: "Az intertemporális modellben a szabad nemzetközi tőkeáramlás",
    options: [
      { label: "A", text: "feltétlenül szükséges, hogy az időszakok közti kereskedelem végbemehessen" },
      { label: "B", text: "nem befolyásolja a fogyasztók választási lehetőségeit" },
      { label: "C", text: "biztosítja a Z=C azonosságot" },
      { label: "D", text: "nem játszik szerepet" }
    ],
    correct: "A"
  }
]
