import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвердевать: PerfectVerb = {
  name: Word('отвердевать', 8),
  singular1stPerson: Word('отвердеваю', 8),
  singular2ndPerson: Word('отвердеваешь', 8),
  singular3rdPerson: Word('отвердевает', 8),
  plural1stPerson: Word('отвердеваем', 8),
  plural2ndPerson: Word('отвердеваете', 8),
  plural3rdPerson: Word('отвердевают', 8),
  masculinePast: Word('отвердевал', 8),
  femininePast: Word('отвердевала', 8),
  neuterPast: Word('отвердевало', 8),
  pluralPast: Word('отвердевали', 8),
  imperativeInformal: Word('отвердевай', 8),
  imperativeFormal: Word('отвердевайте', 8),
  imperfect: [],
};

perfectVerbs.set(отвердевать.name.text, отвердевать);

export { отвердевать };