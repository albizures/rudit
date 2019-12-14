import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const унять: PerfectVerb = {
  name: Word('унять', 2),
  singular1stPerson: Word('уйму', 3),
  singular2ndPerson: Word('уймёшь', 3),
  singular3rdPerson: Word('уймёт', 3),
  plural1stPerson: Word('уймём', 3),
  plural2ndPerson: Word('уймёте', 3),
  plural3rdPerson: Word('уймут', 3),
  masculinePast: Word('унял', 2),
  femininePast: Word('уняла', 4),
  neuterPast: Word('уняло', 2),
  pluralPast: Word('уняли', 2),
  imperativeInformal: Word('уйми', 3),
  imperativeFormal: Word('уймите', 3),
  imperfect: [],
};

perfectVerbs.set(унять.name.text, унять);

export { унять };