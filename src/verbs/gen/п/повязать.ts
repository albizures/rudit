import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повязать: PerfectVerb = {
  name: Word('повязать', 5),
  singular1stPerson: Word('повяжу', 5),
  singular2ndPerson: Word('повяжешь', 3),
  singular3rdPerson: Word('повяжет', 3),
  plural1stPerson: Word('повяжем', 3),
  plural2ndPerson: Word('повяжете', 3),
  plural3rdPerson: Word('повяжут', 3),
  masculinePast: Word('повязал', 5),
  femininePast: Word('повязала', 5),
  neuterPast: Word('повязало', 5),
  pluralPast: Word('повязали', 5),
  imperativeInformal: Word('повяжи', 5),
  imperativeFormal: Word('повяжите', 5),
  imperfect: [],
};

perfectVerbs.set(повязать.name.text, повязать);

export { повязать };