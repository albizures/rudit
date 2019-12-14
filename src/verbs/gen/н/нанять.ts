import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нанять: PerfectVerb = {
  name: Word('нанять', 3),
  singular1stPerson: Word('найму', 4),
  singular2ndPerson: Word('наймёшь', 1),
  singular3rdPerson: Word('наймёт', 1),
  plural1stPerson: Word('наймём', 1),
  plural2ndPerson: Word('наймёте', 1),
  plural3rdPerson: Word('наймут', 4),
  masculinePast: Word('нанял', 1),
  femininePast: Word('наняла', 5),
  neuterPast: Word('наняло', 1),
  pluralPast: Word('наняли', 1),
  imperativeInformal: Word('найми', 4),
  imperativeFormal: Word('наймите', 4),
  imperfect: ['нанимать'],
};

perfectVerbs.set(нанять.name.text, нанять);

export { нанять };