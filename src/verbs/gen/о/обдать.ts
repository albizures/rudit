import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обдать: PerfectVerb = {
  name: Word('обдать', 3),
  singular1stPerson: Word('обдам', 3),
  singular2ndPerson: Word('обдашь', 3),
  singular3rdPerson: Word('обдаст', 3),
  plural1stPerson: Word('обдадим', 5),
  plural2ndPerson: Word('обдадите', 5),
  plural3rdPerson: Word('обдадут', 5),
  masculinePast: Word('обдал//о'бдал', 3),
  femininePast: Word('обдала', 5),
  neuterPast: Word('обдало//о'бдало', 3),
  pluralPast: Word('обдали//о'бдали', 3),
  imperativeInformal: Word('обдай', 3),
  imperativeFormal: Word('обдайте', 3),
  imperfect: [],
};

perfectVerbs.set(обдать.name.text, обдать);

export { обдать };