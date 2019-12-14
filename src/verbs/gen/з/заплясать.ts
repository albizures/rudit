import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заплясать: PerfectVerb = {
  name: Word('заплясать', 6),
  singular1stPerson: Word('запляшу', 6),
  singular2ndPerson: Word('запляшешь', 4),
  singular3rdPerson: Word('запляшет', 4),
  plural1stPerson: Word('запляшем', 4),
  plural2ndPerson: Word('запляшете', 4),
  plural3rdPerson: Word('запляшут', 4),
  masculinePast: Word('заплясал', 6),
  femininePast: Word('заплясала', 6),
  neuterPast: Word('заплясало', 6),
  pluralPast: Word('заплясали', 6),
  imperativeInformal: Word('запляши', 6),
  imperativeFormal: Word('запляшите', 6),
  imperfect: [],
};

perfectVerbs.set(заплясать.name.text, заплясать);

export { заплясать };