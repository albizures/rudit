import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстать: PerfectVerb = {
  name: Word('отстать', 4),
  singular1stPerson: Word('отстану', 4),
  singular2ndPerson: Word('отстанешь', 4),
  singular3rdPerson: Word('отстанет', 4),
  plural1stPerson: Word('отстанем', 4),
  plural2ndPerson: Word('отстанете', 4),
  plural3rdPerson: Word('отстанут', 4),
  masculinePast: Word('отстал', 4),
  femininePast: Word('отстала', 4),
  neuterPast: Word('отстало', 4),
  pluralPast: Word('отстали', 4),
  imperativeInformal: Word('отстань', 4),
  imperativeFormal: Word('отстаньте', 4),
  imperfect: [],
};

perfectVerbs.set(отстать.name.text, отстать);

export { отстать };