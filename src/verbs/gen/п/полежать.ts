import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полежать: PerfectVerb = {
  name: Word('полежать', 5),
  singular1stPerson: Word('полежу', 5),
  singular2ndPerson: Word('полежишь', 5),
  singular3rdPerson: Word('полежит', 5),
  plural1stPerson: Word('полежим', 5),
  plural2ndPerson: Word('полежите', 5),
  plural3rdPerson: Word('полежат', 5),
  masculinePast: Word('полежал', 5),
  femininePast: Word('полежала', 5),
  neuterPast: Word('полежало', 5),
  pluralPast: Word('полежали', 5),
  imperativeInformal: Word('полежи', 5),
  imperativeFormal: Word('полежите', 5),
  imperfect: [],
};

perfectVerbs.set(полежать.name.text, полежать);

export { полежать };