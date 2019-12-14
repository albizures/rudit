import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пронумеровать: PerfectVerb = {
  name: Word('пронумеровать', 10),
  singular1stPerson: Word('пронумерую', 8),
  singular2ndPerson: Word('пронумеруешь', 8),
  singular3rdPerson: Word('пронумерует', 8),
  plural1stPerson: Word('пронумеруем', 8),
  plural2ndPerson: Word('пронумеруете', 8),
  plural3rdPerson: Word('пронумеруют', 8),
  masculinePast: Word('пронумеровал', 10),
  femininePast: Word('пронумеровала', 10),
  neuterPast: Word('пронумеровало', 10),
  pluralPast: Word('пронумеровали', 10),
  imperativeInformal: Word('пронумеруй', 8),
  imperativeFormal: Word('пронумеруйте', 8),
  imperfect: [],
};

perfectVerbs.set(пронумеровать.name.text, пронумеровать);

export { пронумеровать };