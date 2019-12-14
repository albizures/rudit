import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const врасти: PerfectVerb = {
  name: Word('врасти', 5),
  singular1stPerson: Word('врасту', 5),
  singular2ndPerson: Word('врастёшь', 5),
  singular3rdPerson: Word('врастёт', 5),
  plural1stPerson: Word('врастём', 5),
  plural2ndPerson: Word('врастёте', 5),
  plural3rdPerson: Word('врастут', 5),
  masculinePast: Word('врос', 2),
  femininePast: Word('вросла', 5),
  neuterPast: Word('вросло', 5),
  pluralPast: Word('вросли', 5),
  imperativeInformal: Word('врасти', 5),
  imperativeFormal: Word('врастите', 5),
  imperfect: [],
};

perfectVerbs.set(врасти.name.text, врасти);

export { врасти };