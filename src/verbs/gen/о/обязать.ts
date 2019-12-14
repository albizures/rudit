import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обязать: PerfectVerb = {
  name: Word('обязать', 4),
  singular1stPerson: Word('обяжу', 4),
  singular2ndPerson: Word('обяжешь', 2),
  singular3rdPerson: Word('обяжет', 2),
  plural1stPerson: Word('обяжем', 2),
  plural2ndPerson: Word('обяжете', 2),
  plural3rdPerson: Word('обяжут', 2),
  masculinePast: Word('обязал', 4),
  femininePast: Word('обязала', 4),
  neuterPast: Word('обязало', 4),
  pluralPast: Word('обязали', 4),
  imperativeInformal: Word('обяжи', 4),
  imperativeFormal: Word('обяжите', 4),
  imperfect: [],
};

perfectVerbs.set(обязать.name.text, обязать);

export { обязать };