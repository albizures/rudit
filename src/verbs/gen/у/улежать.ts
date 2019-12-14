import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улежать: PerfectVerb = {
  name: Word('улежать', 4),
  singular1stPerson: Word('улежу', 4),
  singular2ndPerson: Word('улежишь', 4),
  singular3rdPerson: Word('улежит', 4),
  plural1stPerson: Word('улежим', 4),
  plural2ndPerson: Word('улежите', 4),
  plural3rdPerson: Word('улежат', 4),
  masculinePast: Word('улежал', 4),
  femininePast: Word('улежала', 4),
  neuterPast: Word('улежало', 4),
  pluralPast: Word('улежали', 4),
  imperativeInformal: Word('улежи', 4),
  imperativeFormal: Word('улежите', 4),
  imperfect: [],
};

perfectVerbs.set(улежать.name.text, улежать);

export { улежать };