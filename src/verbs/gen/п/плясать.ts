import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плясать: PerfectVerb = {
  name: Word('плясать', 4),
  singular1stPerson: Word('пляшу', 4),
  singular2ndPerson: Word('пляшешь', 2),
  singular3rdPerson: Word('пляшет', 2),
  plural1stPerson: Word('пляшем', 2),
  plural2ndPerson: Word('пляшете', 2),
  plural3rdPerson: Word('пляшут', 2),
  masculinePast: Word('плясал', 4),
  femininePast: Word('плясала', 4),
  neuterPast: Word('плясало', 4),
  pluralPast: Word('плясали', 4),
  imperativeInformal: Word('пляши', 4),
  imperativeFormal: Word('пляшите', 4),
  imperfect: ['сплясать'],
};

perfectVerbs.set(плясать.name.text, плясать);

export { плясать };