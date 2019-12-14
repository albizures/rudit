import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсрочивать: PerfectVerb = {
  name: Word('отсрочивать', 4),
  singular1stPerson: Word('отсрочиваю', 4),
  singular2ndPerson: Word('отсрочиваешь', 4),
  singular3rdPerson: Word('отсрочивает', 4),
  plural1stPerson: Word('отсрочиваем', 4),
  plural2ndPerson: Word('отсрочиваете', 4),
  plural3rdPerson: Word('отсрочивают', 4),
  masculinePast: Word('отсрочивал', 4),
  femininePast: Word('отсрочивала', 4),
  neuterPast: Word('отсрочивало', 4),
  pluralPast: Word('отсрочивали', 4),
  imperativeInformal: Word('отсрочивай', 4),
  imperativeFormal: Word('отсрочивайте', 4),
  imperfect: ['отсрочить'],
};

perfectVerbs.set(отсрочивать.name.text, отсрочивать);

export { отсрочивать };