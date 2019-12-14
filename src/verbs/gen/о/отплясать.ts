import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отплясать: PerfectVerb = {
  name: Word('отплясать', 6),
  singular1stPerson: Word('отпляшу', 6),
  singular2ndPerson: Word('отпляшешь', 4),
  singular3rdPerson: Word('отпляшет', 4),
  plural1stPerson: Word('отпляшем', 4),
  plural2ndPerson: Word('отпляшете', 4),
  plural3rdPerson: Word('отпляшут', 4),
  masculinePast: Word('отплясал', 6),
  femininePast: Word('отплясала', 6),
  neuterPast: Word('отплясало', 6),
  pluralPast: Word('отплясали', 6),
  imperativeInformal: Word('отпляши', 6),
  imperativeFormal: Word('отпляшите', 6),
  imperfect: [],
};

perfectVerbs.set(отплясать.name.text, отплясать);

export { отплясать };