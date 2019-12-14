import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвязать: PerfectVerb = {
  name: Word('обвязать', 5),
  singular1stPerson: Word('обвяжу', 5),
  singular2ndPerson: Word('обвяжешь', 3),
  singular3rdPerson: Word('обвяжет', 3),
  plural1stPerson: Word('обвяжем', 3),
  plural2ndPerson: Word('обвяжете', 3),
  plural3rdPerson: Word('обвяжут', 3),
  masculinePast: Word('обвязал', 5),
  femininePast: Word('обвязала', 5),
  neuterPast: Word('обвязало', 5),
  pluralPast: Word('обвязали', 5),
  imperativeInformal: Word('обвяжи', 5),
  imperativeFormal: Word('обвяжите', 5),
  imperfect: [],
};

perfectVerbs.set(обвязать.name.text, обвязать);

export { обвязать };