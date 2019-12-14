import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полулежать: PerfectVerb = {
  name: Word('полулежать', 7),
  singular1stPerson: Word('полулежу', 7),
  singular2ndPerson: Word('полулежишь', 7),
  singular3rdPerson: Word('полулежит', 7),
  plural1stPerson: Word('полулежим', 7),
  plural2ndPerson: Word('полулежите', 7),
  plural3rdPerson: Word('полулежат', 7),
  masculinePast: Word('полулежал', 7),
  femininePast: Word('полулежала', 7),
  neuterPast: Word('полулежало', 7),
  pluralPast: Word('полулежали', 7),
  imperativeInformal: Word('полулежи', 7),
  imperativeFormal: Word('полулежите', 7),
  imperfect: [],
};

perfectVerbs.set(полулежать.name.text, полулежать);

export { полулежать };