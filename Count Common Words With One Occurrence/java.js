let words1 = [
    "bjxzvssdoq",
    "oom",
    "lxrrvf",
    "aoeselhvrnw",
    "awnornqyztqlza",
    "bjxqkapuvaw",
    "wibxruerngdzgjd",
    "rezrwdzvllpbjpnikhzraz",
    "pswmnrsepudx",
    "nlicjldpeia",
    "glg",
    "nllxfcjjitmsuugmr",
    "cl",
    "pysmpgjakkjnusfopphb",
    "zxlwcdjpn",
    "xktsfnchwrdesnf",
    "qptnoxxgrjmvr",
    "exlfwjfsbsirbbkyqjtinrrwuhh",
    "rqbnghajxygilgdjejopyuwyjqrx",
    "vrjkqsicuqoalqyaxkaaogxbf",
    "ixnlltqbpygmpjuspom",
    "izajsxotcbhzdnkujwgdzo",
    "b",
    "lighabre",
    "i",
    "ljqqbfddipvcooh",
    "hboedpepeeunx",
    "bkhzhiefammwqkhvampokd",
    "ptlozguwmyyp",
    "loeshsjgazzwvs",
    "kyrltbdzlymjxtvwiiq",
    "fk",
    "mbjpgwsahkgkehlcoqbhunqchxj",
    "nfyuvlrmiturheb",
    "cyqwsiysmoirurj",
    "sciqruywy",
    "podsrhmsozan",
    "nlyadkrxhdbup",
    "gdugldwghzt",
    "wpjm",
    "gjobdekmjisjgadkwwemnmco",
    "dkjdtimdghvlhuetxyaklk",
    "iwqylhdwqbwaqdouowoodhs",
    "mn",
  ],
  words2 = [
    "eeormvovhzslwsqgzthlgntgzc",
    "zfwownznh",
    "suxrkdbjdjjtbkjucsbyk",
    "u",
    "y",
    "lbjooktoctgwbbptiffytquha",
    "dcsxrghgpultkatbecjadbespvww",
    "vwduylshcpaiu",
    "rtcxwctvquaiuwkgvdx",
    "a",
    "szearxmdqcismljmihbtkcirztdnrc",
    "htgmuxtxdunsvfizb",
    "hybe",
    "nsegkgwcvopncmfpaahhhjeuqjosv",
    "jtarnnpppxtzmopixeijqqahkd",
    "hazcgrrnpourkyoeanodejiptne",
    "kurhokvhixihe",
    "ljwycewmecfqdhtxiokjn",
    "qgjzzvpyvwetlsvcsw",
    "aunns",
    "nwcnfrzzvxafkfjfnczummtubikji",
    "nipiygnvlfntgpxfedj",
    "mgnt",
    "xvjehufvaqouhztnmts",
    "sjtbrfjwtqxakqktxjaljrbwfoxvz",
    "dfeujeikfrtrpiafrgxvjlkpxtog",
    "u",
    "ggbcxoasodaqaazulrxjleecexey",
    "inedrgssajhpygfvozigohis",
    "pevxwgfzxebybfe",
    "cgy",
    "fnhvlx",
    "vxfybaebkoq",
    "xvhx",
    "mxbqjtanctljewwjjlbpkgbtsm",
    "mlwagamcikbcpuexhikmizp",
    "qeiomipvsoqlsnhylulirrcwtqga",
    "bwemqcgyusuauwlpbjjru",
    "iimcbidtndh",
    "lpjejlkmxtlbyvnscy",
    "dlspriicnyykdsyvswlgktavwloq",
    "dib",
    "qoptbduulgqwquvhdvmwdz",
    "xrtxghrbfrhpzduxeljnctgg",
    "schmbsaupayqnpchn",
    "kah",
    "itotymryqufqpozrwmvsl",
    "gurb",
    "xsyocxcmwvqmnmxthfemmu",
    "pkfdutm",
    "hkbwxwjxyuld",
    "u...",
  ];

let countWords = function (words1, words2) {
  let obj = {};
  let obj1 = {};
  let count = 0;

  for (let i = 0; i < words1.length; i++) {
    if (obj[words1[i]] == undefined) {
      obj[words1[i]] = 1;
    } else {
      obj[words1[i]] += 1;
    }
  }

  for (let i = 0; i < words2.length; i++) {
    if (obj1[words2[i]] == undefined) {
      obj1[words2[i]] = 1;
    } else {
      obj1[words2[i]] += 1;
    }
  }

  for (let word in obj) {
    if (obj[word] === 1 && obj1[word] === 1) {
      count++;
    }
  }
  return count;
};

console.log(countWords(words1, words2));
