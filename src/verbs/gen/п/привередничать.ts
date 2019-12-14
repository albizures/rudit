import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привередничать: PerfectVerb = {
  name: Word('привередничать', 6),
  singular1stPerson: Word('привередничаю', 6),
  singular2ndPerson: Word('привередничаешь', 6),
  singular3rdPerson: Word('привередничает', 6),
  plural1stPerson: Word('привередничаем', 6),
  plural2ndPerson: Word('привередничаете', 6),
  plural3rdPerson: Word('привередничают', 6),
  masculinePast: Word('привередничал', 6),
  femininePast: Word('привередничала', 6),
  neuterPast: Word('привередничало', 6),
  pluralPast: Word('привередничали', 6),
  imperativeInformal: Word('привередничай', 6),
  imperativeFormal: Word('привередничайте', 6),
  imperfect: [],
};

perfectVerbs.set(привередничать.name.text, привередничать);

export { привередничать };