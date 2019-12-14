import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вязать: PerfectVerb = {
  name: Word('вязать', 3),
  singular1stPerson: Word('вяжу', 3),
  singular2ndPerson: Word('вяжешь', 1),
  singular3rdPerson: Word('вяжет', 1),
  plural1stPerson: Word('вяжем', 1),
  plural2ndPerson: Word('вяжете', 1),
  plural3rdPerson: Word('вяжут', 1),
  masculinePast: Word('вязал', 3),
  femininePast: Word('вязала', 3),
  neuterPast: Word('вязало', 3),
  pluralPast: Word('вязали', 3),
  imperativeInformal: Word('вяжи', 3),
  imperativeFormal: Word('вяжите', 3),
  imperfect: ['связать'],
};

perfectVerbs.set(вязать.name.text, вязать);

export { вязать };