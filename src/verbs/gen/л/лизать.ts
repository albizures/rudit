import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лизать: PerfectVerb = {
  name: Word('лизать', 3),
  singular1stPerson: Word('лижу', 1),
  singular2ndPerson: Word('лижешь', 3),
  singular3rdPerson: Word('лижет', 3),
  plural1stPerson: Word('лижем', 3),
  plural2ndPerson: Word('лижете', 3),
  plural3rdPerson: Word('лижут', 1),
  masculinePast: Word('лизал', 3),
  femininePast: Word('лизала', 3),
  neuterPast: Word('лизало', 3),
  pluralPast: Word('лизали', 3),
  imperativeInformal: Word('лижи', 1),
  imperativeFormal: Word('лижите', 5),
  imperfect: ['лизнуть','полизать'],
};

perfectVerbs.set(лизать.name.text, лизать);

export { лизать };