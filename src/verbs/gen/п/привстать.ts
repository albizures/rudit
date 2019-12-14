import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привстать: PerfectVerb = {
  name: Word('привстать', 6),
  singular1stPerson: Word('привстану', 6),
  singular2ndPerson: Word('привстанешь', 6),
  singular3rdPerson: Word('привстанет', 6),
  plural1stPerson: Word('привстанем', 6),
  plural2ndPerson: Word('привстанете', 6),
  plural3rdPerson: Word('привстанут', 6),
  masculinePast: Word('привстал', 6),
  femininePast: Word('привстала', 6),
  neuterPast: Word('привстало', 6),
  pluralPast: Word('привстали', 6),
  imperativeInformal: Word('привстань', 6),
  imperativeFormal: Word('привстаньте', 6),
  imperfect: [],
};

perfectVerbs.set(привстать.name.text, привстать);

export { привстать };