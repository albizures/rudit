import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const звать: PerfectVerb = {
  name: Word('звать', 2),
  singular1stPerson: Word('зову', 3),
  singular2ndPerson: Word('зовёшь', 1),
  singular3rdPerson: Word('зовёт', 1),
  plural1stPerson: Word('зовём', 1),
  plural2ndPerson: Word('зовёте', 5),
  plural3rdPerson: Word('зовут', 3),
  masculinePast: Word('звал', 2),
  femininePast: Word('звала', 4),
  neuterPast: Word('звало', 2),
  pluralPast: Word('звали', 2),
  imperativeInformal: Word('зови', 3),
  imperativeFormal: Word('зовите', 3),
  imperfect: ['позвать'],
};

perfectVerbs.set(звать.name.text, звать);

export { звать };