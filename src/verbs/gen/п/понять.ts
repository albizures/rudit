import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понять: PerfectVerb = {
  name: Word('понять', 3),
  singular1stPerson: Word('пойму', 4),
  singular2ndPerson: Word('поймёшь', 4),
  singular3rdPerson: Word('поймёт', 4),
  plural1stPerson: Word('поймём', 4),
  plural2ndPerson: Word('поймёте', 4),
  plural3rdPerson: Word('поймут', 4),
  masculinePast: Word('понял', 1),
  femininePast: Word('поняла', 5),
  neuterPast: Word('поняло', 1),
  pluralPast: Word('поняли', 1),
  imperativeInformal: Word('пойми', 4),
  imperativeFormal: Word('поймите', 4),
  imperfect: ['понимать'],
};

perfectVerbs.set(понять.name.text, понять);

export { понять };