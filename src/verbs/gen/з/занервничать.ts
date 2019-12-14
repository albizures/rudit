import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const занервничать: PerfectVerb = {
  name: Word('занервничать', 3),
  singular1stPerson: Word('занервничаю', 3),
  singular2ndPerson: Word('занервничаешь', 3),
  singular3rdPerson: Word('занервничает', 3),
  plural1stPerson: Word('занервничаем', 3),
  plural2ndPerson: Word('занервничаете', 3),
  plural3rdPerson: Word('занервничают', 3),
  masculinePast: Word('занервничал', 3),
  femininePast: Word('занервничала', 3),
  neuterPast: Word('занервничало', 3),
  pluralPast: Word('занервничали', 3),
  imperativeInformal: Word('занервничай', 3),
  imperativeFormal: Word('занервничайте', 3),
  imperfect: [],
};

perfectVerbs.set(занервничать.name.text, занервничать);

export { занервничать };