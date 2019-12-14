import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распродать: PerfectVerb = {
  name: Word('распродать', 7),
  singular1stPerson: Word('распродам', 7),
  singular2ndPerson: Word('распродашь', 7),
  singular3rdPerson: Word('распродаст', 7),
  plural1stPerson: Word('распродадим', 9),
  plural2ndPerson: Word('распродадите', 9),
  plural3rdPerson: Word('распродадут', 9),
  masculinePast: Word('распродал//распро'дал', 7),
  femininePast: Word('распродала', 9),
  neuterPast: Word('распродало//распро'дало', 7),
  pluralPast: Word('распродали//распро'дали', 7),
  imperativeInformal: Word('распродай', 7),
  imperativeFormal: Word('распродайте', 7),
  imperfect: [],
};

perfectVerbs.set(распродать.name.text, распродать);

export { распродать };