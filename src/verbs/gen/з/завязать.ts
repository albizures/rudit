import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завязать: PerfectVerb = {
  name: Word('завязать', 5),
  singular1stPerson: Word('завяжу', 5),
  singular2ndPerson: Word('завяжешь', 3),
  singular3rdPerson: Word('завяжет', 3),
  plural1stPerson: Word('завяжем', 3),
  plural2ndPerson: Word('завяжете', 3),
  plural3rdPerson: Word('завяжут', 3),
  masculinePast: Word('завязал', 5),
  femininePast: Word('завязала', 5),
  neuterPast: Word('завязало', 5),
  pluralPast: Word('завязали', 5),
  imperativeInformal: Word('завяжи', 5),
  imperativeFormal: Word('завяжите', 5),
  imperfect: [],
};

perfectVerbs.set(завязать.name.text, завязать);

export { завязать };