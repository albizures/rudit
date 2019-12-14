import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплясать: PerfectVerb = {
  name: Word('сплясать', 5),
  singular1stPerson: Word('спляшу', 5),
  singular2ndPerson: Word('спляшешь', 3),
  singular3rdPerson: Word('спляшет', 3),
  plural1stPerson: Word('спляшем', 3),
  plural2ndPerson: Word('спляшете', 3),
  plural3rdPerson: Word('спляшут', 3),
  masculinePast: Word('сплясал', 5),
  femininePast: Word('сплясала', 5),
  neuterPast: Word('сплясало', 5),
  pluralPast: Word('сплясали', 5),
  imperativeInformal: Word('спляши', 5),
  imperativeFormal: Word('спляшите', 5),
  imperfect: [],
};

perfectVerbs.set(сплясать.name.text, сплясать);

export { сплясать };