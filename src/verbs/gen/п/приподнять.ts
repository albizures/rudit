import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приподнять: PerfectVerb = {
  name: Word('приподнять', 7),
  singular1stPerson: Word('приподним-//подыму', 17),
  singular2ndPerson: Word('приподним-//подымешь', 15),
  singular3rdPerson: Word('приподним-//подымет', 15),
  plural1stPerson: Word('приподним-//подымем', 15),
  plural2ndPerson: Word('приподним-//подымете', 15),
  plural3rdPerson: Word('приподним-//подымут', 15),
  masculinePast: Word('приподнял', 7),
  femininePast: Word('приподняла', 9),
  neuterPast: Word('приподняло', 7),
  pluralPast: Word('приподняли', 7),
  imperativeInformal: Word('приподним-//подыми', 17),
  imperativeFormal: Word('приподним-//подымите', 17),
  imperfect: [],
};

perfectVerbs.set(приподнять.name.text, приподнять);

export { приподнять };