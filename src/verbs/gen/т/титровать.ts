import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const титровать: PerfectVerb = {
  name: Word('титровать', 6),
  singular1stPerson: Word('титрую', 4),
  singular2ndPerson: Word('титруешь', 4),
  singular3rdPerson: Word('титрует', 4),
  plural1stPerson: Word('титруем', 4),
  plural2ndPerson: Word('титруете', 4),
  plural3rdPerson: Word('титруют', 4),
  masculinePast: Word('титровал', 6),
  femininePast: Word('титровала', 6),
  neuterPast: Word('титровало', 6),
  pluralPast: Word('титровали', 6),
  imperativeInformal: Word('титруй', 4),
  imperativeFormal: Word('титруйте', 4),
  imperfect: [],
};

perfectVerbs.set(титровать.name.text, титровать);

export { титровать };