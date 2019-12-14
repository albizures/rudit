import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прилежать: PerfectVerb = {
  name: Word('прилежать', 6),
  singular1stPerson: Word('прилежу', 6),
  singular2ndPerson: Word('прилежишь', 6),
  singular3rdPerson: Word('прилежит', 6),
  plural1stPerson: Word('прилежим', 6),
  plural2ndPerson: Word('прилежите', 6),
  plural3rdPerson: Word('прилежат', 6),
  masculinePast: Word('прилежал', 6),
  femininePast: Word('прилежала', 6),
  neuterPast: Word('прилежало', 6),
  pluralPast: Word('прилежали', 6),
  imperativeInformal: Word('прилежи', 6),
  imperativeFormal: Word('прилежите', 6),
  imperfect: [],
};

perfectVerbs.set(прилежать.name.text, прилежать);

export { прилежать };