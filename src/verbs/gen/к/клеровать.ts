import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клеровать: PerfectVerb = {
  name: Word('клеровать', 6),
  singular1stPerson: Word('клерую', 4),
  singular2ndPerson: Word('клеруешь', 4),
  singular3rdPerson: Word('клерует', 4),
  plural1stPerson: Word('клеруем', 4),
  plural2ndPerson: Word('клеруете', 4),
  plural3rdPerson: Word('клеруют', 4),
  masculinePast: Word('клеровал', 6),
  femininePast: Word('клеровала', 6),
  neuterPast: Word('клеровало', 6),
  pluralPast: Word('клеровали', 6),
  imperativeInformal: Word('клеруй', 4),
  imperativeFormal: Word('клеруйте', 4),
  imperfect: [],
};

perfectVerbs.set(клеровать.name.text, клеровать);

export { клеровать };