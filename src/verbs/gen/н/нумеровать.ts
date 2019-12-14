import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нумеровать: PerfectVerb = {
  name: Word('нумеровать', 7),
  singular1stPerson: Word('нумерую', 5),
  singular2ndPerson: Word('нумеруешь', 5),
  singular3rdPerson: Word('нумерует', 5),
  plural1stPerson: Word('нумеруем', 5),
  plural2ndPerson: Word('нумеруете', 5),
  plural3rdPerson: Word('нумеруют', 5),
  masculinePast: Word('нумеровал', 7),
  femininePast: Word('нумеровала', 7),
  neuterPast: Word('нумеровало', 7),
  pluralPast: Word('нумеровали', 7),
  imperativeInformal: Word('нумеруй', 5),
  imperativeFormal: Word('нумеруйте', 5),
  imperfect: [],
};

perfectVerbs.set(нумеровать.name.text, нумеровать);

export { нумеровать };