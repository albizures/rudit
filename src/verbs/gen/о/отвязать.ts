import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвязать: PerfectVerb = {
  name: Word('отвязать', 5),
  singular1stPerson: Word('отвяжу', 5),
  singular2ndPerson: Word('отвяжешь', 3),
  singular3rdPerson: Word('отвяжет', 3),
  plural1stPerson: Word('отвяжем', 3),
  plural2ndPerson: Word('отвяжете', 3),
  plural3rdPerson: Word('отвяжут', 3),
  masculinePast: Word('отвязал', 5),
  femininePast: Word('отвязала', 5),
  neuterPast: Word('отвязало', 5),
  pluralPast: Word('отвязали', 5),
  imperativeInformal: Word('отвяжи', 5),
  imperativeFormal: Word('отвяжите', 5),
  imperfect: [],
};

perfectVerbs.set(отвязать.name.text, отвязать);

export { отвязать };