import { CONFIG } from './config'

export const WORDS = [
  'ã^sah',
  'ableh',
  "sapu'",
  'dánih',
  "eksa'",
  'yupeh',
  "akka'",
  'aksup',
  'pútah',
  'kámel',
  'astap',
  'ũssah',
  'ustah',
  'uktceh',
  'belah',
  "láya'",
  "mẽsa'",
  "bela'",
  'mesah',
  'fetcak',
  'setah',
  "sãte'",
  "kũta'",
  "duhe'",
  'lapah',
  "esse'",
  'kutceh',
  "ukte'",
  "fala'",
  'mehah',
  "alla'",
  'lapes',
  'dapah',
  'sũleh',
  'dubah',
  'uffuh',
  'tcufak',
  'dufah',
  'bahah',
  "wáya'",
  "kate'",
  'baseh',
  'sãwah',
  'sanah',
  'uktcah',
  'nalhah',
  'nuseh',
  'pelah',
  'panah',
  'makah',
  "bala'",
  "kafe'",
  'alhtuh',
  "suba'",
  "tcesa'",
  "nale'",
  "unna'",
  "desu'",
  'sémah',
  'wúhah',
  "amme'",
  'pulheh',
  'bunah',
  "fuka'",
  'búleh',
  'ã^wah',
  'allũs',
  'sũfah',
  'tcũpah',
  "able'",
  "pela'",
  "séke'",
  'alhpak',
  'essap',
  'aléhu',
  'famah',
  'éplel',
  "funi'",
  'alhlheh',
  'sépah',
  'dahah',
  "yãpa'",
  "ulhte'",
  "uktce'",
  'sẽleh',
  "tcahe'",
  'fénah',
  'úkula',
  'aletu',
  "ánúa'",
  'lhéleh',
  'emmak',
  'yukah',
  'lhepah',
  "ũsse'",
  "dabe'",
  "tcũke'",
  "fufu'",
  'butah',
  'pakét',
  "kẽta'",
  "uyya'",
  'lúsah',
  'sãfah',
  'tceluk',
  "sawe'",
  "dale'",
  "sũse'",
  'múmah',
  'senuk',
  'emmah',
  'lufah',
  'yãyãh',
  "sute'",
  'pũfah',
  "usũa'",
  'tcãyah',
  'ã^sah',
  'tculay',
  'wehah',
  "nuta'",
  "nuse'",
  'yanas',
  "fani'",
  'usmeh',
  'nunah',
  "dupa'",
  'kúleh',
  'náhah',
  'kulak',
  'uyyah',
  'ahkah',
  'uhpeh',
  "kãte'",
  "patce'",
  'kunih',
  'kãtcak',
  "yala'",
  "buta'",
  "kufe'",
  "eyye'",
  'ayyup',
  'kãtceh',
  "seni'",
  'mufeh',
  "nita'",
  'emmeh',
  'ekbeh',
  'tcéleh',
  'selah',
  'pesah',
  'áfuah',
  'sélek',
  'sẽfah',
  "pala'",
  'wáyah',
  'mẽteh',
  'nãtah',
  "beta'",
  'femah',
  'uktcãk',
  'penak',
  'esses',
  'yakéh',
  'senap',
  'sũkah',
  'sutek',
  'essuh',
  'danap',
  'lawah',
  'ahpeh',
  'dewah',
  "nihe'",
  "nipe'",
  'katus',
  'kutah',
  "uffu'",
  "ukfa'",
  'albuh',
  'essah',
  "alba'",
  'puseh',
  'latcah',
  'patah',
  'attah',
  'utcúah',
  'balup',
  "pãse'",
  'tcéyah',
  'selup',
  'unnih',
  'ẽ^seh',
  "tcula'",
  "nani'",
  'apúah',
  'uktak',
  'uksak',
  'uskap',
  "seha'",
  'pãyah',
  'mũfah',
  "wéke'",
  'nanih',
  "waka'",
  'dúmeh',
  'eksuh',
  'betcah',
  'ukhẽs',
  'elleh',
  'futcek',
  'ũksuh',
  'niyah',
  "mẽku'",
  'tcũkas',
  'ayyep',
  "kutca'",
  'kũsak',
  "sãte'",
  "wása'",
  "lupe'",
  'kaleh',
  "nake'",
  'lháyah',
  "sále'",
  'eskuh',
  'tcãwah',
  'wéleh',
  'káhah',
  'lháleh',
  'lũbuh',
  'tcáhah',
  'sehah',
  'uétah',
  'ninak',
  'sulus',
  'bẽ^ka',
  'akseh',
  'sáleh',
  'álamu',
  'lumah',
  'usseh',
  "yãha'",
  'áyala',
  'ulbah',
  "yãyã'",
  'ayyah',
  "tcũsa'",
  "baha'",
  'kulah',
  'fetcek',
  'basah',
  'katah',
  "mãte'",
  "pena'",
  'akses',
  'kũtah',
  'ebbak',
  'súleh',
  'fulup',
  'tcetuh',
  'peseh',
  "dãtce'",
  "ãkha'",
  'wékeh',
  'dayek',
  'benah',
  "uske'",
  "yuka'",
  'tcãleh',
  'kutcah',
  'fuhah',
  'tcãsah',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
