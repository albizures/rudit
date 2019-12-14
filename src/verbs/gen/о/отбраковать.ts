import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбраковать: PerfectVerb = {
  name: Word('отбраковать', 8),
  singular1stPerson: Word('отбракую', 6),
  singular2ndPerson: Word('отбракуешь', 6),
  singular3rdPerson: Word('отбракует', 6),
  plural1stPerson: Word('отбракуем', 6),
  plural2ndPerson: Word('отбракуете', 6),
  plural3rdPerson: Word('отбракуют', 6),
  masculinePast: Word('отбраковал', 8),
  femininePast: Word('отбраковала', 8),
  neuterPast: Word('отбраковало', 8),
  pluralPast: Word('отбраковали', 8),
  imperativeInformal: Word('отбракуй', 6),
  imperativeFormal: Word('отбракуйте', 6),
  imperfect: [],
};

perfectVerbs.set(отбраковать.name.text, отбраковать);

export { отбраковать };