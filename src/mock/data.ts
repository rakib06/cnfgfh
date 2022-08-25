const groom = "Rockib";
const bride = "Shithi";

let date = "September 16, 2022";
let dateEx = "Badro 30, 2022";
let address = "Mirpur";

const lottie_name = "partyyy";
const music163_id = "1493994313";

let preCode = "";

let code = `const { 👦,👧 } = 🌏;
👦.name = "${groom}";
👧.name = "${bride}";

const wedding = new Wedding(👦,👧);
wedding.setDate("${date}");
wedding.setLocation("${address}");
wedding.generateInvitation();
`
//code = "";
export default {
  groom,
  bride,
  date,
  dateEx,
  address,
  lottie_name,
  music163_id,
  preCode,
  code,
  executions: [{
    name: 'Making...',
    time: '',
    visible: false,
    duration: undefined
  }]
}