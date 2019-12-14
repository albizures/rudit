import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const занять: PerfectVerb = {
  name: Word('занять', 3),
  singular1stPerson: Word('займу', 4),
  singular2ndPerson: Word('займёшь', 4),
  singular3rdPerson: Word('займёт', 4),
  plural1stPerson: Word('займём', 4),
  plural2ndPerson: Word('займёте', 4),
  plural3rdPerson: Word('займут', 4),
  masculinePast: Word('занял', 1),
  femininePast: Word('заняла', 5),
  neuterPast: Word('заняло', 1),
  pluralPast: Word('заняли', 1),
  imperativeInformal: Word('займи', 4),
  imperativeFormal: Word('займите', 4),
  imperfect: ['занимать'],
};

perfectVerbs.set(занять.name.text, занять);

export { занять };