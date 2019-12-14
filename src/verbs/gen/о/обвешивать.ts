import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвешивать: PerfectVerb = {
  name: Word('обвешивать', 3),
  singular1stPerson: Word('обвешиваю', 3),
  singular2ndPerson: Word('обвешиваешь', 3),
  singular3rdPerson: Word('обвешивает', 3),
  plural1stPerson: Word('обвешиваем', 3),
  plural2ndPerson: Word('обвешиваете', 3),
  plural3rdPerson: Word('обвешивают', 3),
  masculinePast: Word('обвешивал', 3),
  femininePast: Word('обвешивала', 3),
  neuterPast: Word('обвешивало', 3),
  pluralPast: Word('обвешивали', 3),
  imperativeInformal: Word('обвешивай', 3),
  imperativeFormal: Word('обвешивайте', 3),
  imperfect: [],
};

perfectVerbs.set(обвешивать.name.text, обвешивать);

export { обвешивать };