import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бункеровать: PerfectVerb = {
  name: Word('бункеровать', 8),
  singular1stPerson: Word('бункерую', 6),
  singular2ndPerson: Word('бункеруешь', 6),
  singular3rdPerson: Word('бункерует', 6),
  plural1stPerson: Word('бункеруем', 6),
  plural2ndPerson: Word('бункеруете', 6),
  plural3rdPerson: Word('бункеруют', 6),
  masculinePast: Word('бункеровал', 8),
  femininePast: Word('бункеровала', 8),
  neuterPast: Word('бункеровало', 8),
  pluralPast: Word('бункеровали', 8),
  imperativeInformal: Word('бункеруй', 6),
  imperativeFormal: Word('бункеруйте', 6),
  imperfect: [],
};

perfectVerbs.set(бункеровать.name.text, бункеровать);

export { бункеровать };