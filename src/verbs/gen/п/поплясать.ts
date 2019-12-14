import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поплясать: PerfectVerb = {
  name: Word('поплясать', 6),
  singular1stPerson: Word('попляшу', 6),
  singular2ndPerson: Word('попляшешь', 4),
  singular3rdPerson: Word('попляшет', 4),
  plural1stPerson: Word('попляшем', 4),
  plural2ndPerson: Word('попляшете', 4),
  plural3rdPerson: Word('попляшут', 4),
  masculinePast: Word('поплясал', 6),
  femininePast: Word('поплясала', 6),
  neuterPast: Word('поплясало', 6),
  pluralPast: Word('поплясали', 6),
  imperativeInformal: Word('попляши', 6),
  imperativeFormal: Word('попляшите', 6),
  imperfect: [],
};

perfectVerbs.set(поплясать.name.text, поплясать);

export { поплясать };