import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изрезать: PerfectVerb = {
  name: Word('изрезать', 3),
  singular1stPerson: Word('изрежу', 3),
  singular2ndPerson: Word('изрежешь', 3),
  singular3rdPerson: Word('изрежет', 3),
  plural1stPerson: Word('изрежем', 3),
  plural2ndPerson: Word('изрежете', 3),
  plural3rdPerson: Word('изрежут', 3),
  masculinePast: Word('изрезал', 3),
  femininePast: Word('изрезала', 3),
  neuterPast: Word('изрезало', 3),
  pluralPast: Word('изрезали', 3),
  imperativeInformal: Word('изрежь', 3),
  imperativeFormal: Word('изрежьте', 3),
  imperfect: [],
};

perfectVerbs.set(изрезать.name.text, изрезать);

export { изрезать };