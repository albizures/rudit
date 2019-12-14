import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const муштровать: PerfectVerb = {
  name: Word('муштровать', 7),
  singular1stPerson: Word('муштрую', 5),
  singular2ndPerson: Word('муштруешь', 5),
  singular3rdPerson: Word('муштрует', 5),
  plural1stPerson: Word('муштруем', 5),
  plural2ndPerson: Word('муштруете', 5),
  plural3rdPerson: Word('муштруют', 5),
  masculinePast: Word('муштровал', 7),
  femininePast: Word('муштровала', 7),
  neuterPast: Word('муштровало', 7),
  pluralPast: Word('муштровали', 7),
  imperativeInformal: Word('муштруй', 5),
  imperativeFormal: Word('муштруйте', 5),
  imperfect: [],
};

perfectVerbs.set(муштровать.name.text, муштровать);

export { муштровать };