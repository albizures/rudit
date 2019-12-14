import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лежать: PerfectVerb = {
  name: Word('лежать', 3),
  singular1stPerson: Word('лежу', 3),
  singular2ndPerson: Word('лежишь', 3),
  singular3rdPerson: Word('лежит', 3),
  plural1stPerson: Word('лежим', 3),
  plural2ndPerson: Word('лежите', 3),
  plural3rdPerson: Word('лежат', 3),
  masculinePast: Word('лежал', 3),
  femininePast: Word('лежала', 3),
  neuterPast: Word('лежало', 3),
  pluralPast: Word('лежали', 3),
  imperativeInformal: Word('лежи', 3),
  imperativeFormal: Word('лежите', 3),
  imperfect: ['лечь','полежать'],
};

perfectVerbs.set(лежать.name.text, лежать);

export { лежать };