import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвязать: PerfectVerb = {
  name: Word('подвязать', 6),
  singular1stPerson: Word('подвяжу', 6),
  singular2ndPerson: Word('подвяжешь', 4),
  singular3rdPerson: Word('подвяжет', 4),
  plural1stPerson: Word('подвяжем', 4),
  plural2ndPerson: Word('подвяжете', 4),
  plural3rdPerson: Word('подвяжут', 4),
  masculinePast: Word('подвязал', 6),
  femininePast: Word('подвязала', 6),
  neuterPast: Word('подвязало', 6),
  pluralPast: Word('подвязали', 6),
  imperativeInformal: Word('подвяжи', 6),
  imperativeFormal: Word('подвяжите', 6),
  imperfect: [],
};

perfectVerbs.set(подвязать.name.text, подвязать);

export { подвязать };