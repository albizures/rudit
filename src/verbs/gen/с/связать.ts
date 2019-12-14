import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const связать: PerfectVerb = {
  name: Word('связать', 4),
  singular1stPerson: Word('свяжу', 4),
  singular2ndPerson: Word('свяжешь', 2),
  singular3rdPerson: Word('свяжет', 2),
  plural1stPerson: Word('свяжем', 2),
  plural2ndPerson: Word('свяжете', 2),
  plural3rdPerson: Word('свяжут', 2),
  masculinePast: Word('связал', 4),
  femininePast: Word('связала', 4),
  neuterPast: Word('связало', 4),
  pluralPast: Word('связали', 4),
  imperativeInformal: Word('свяжи', 4),
  imperativeFormal: Word('свяжите', 4),
  imperfect: ['вязать','связывать'],
};

perfectVerbs.set(связать.name.text, связать);

export { связать };