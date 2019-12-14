import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвешивать: PerfectVerb = {
  name: Word('отвешивать', 3),
  singular1stPerson: Word('отвешиваю', 3),
  singular2ndPerson: Word('отвешиваешь', 3),
  singular3rdPerson: Word('отвешивает', 3),
  plural1stPerson: Word('отвешиваем', 3),
  plural2ndPerson: Word('отвешиваете', 3),
  plural3rdPerson: Word('отвешивают', 3),
  masculinePast: Word('отвешивал', 3),
  femininePast: Word('отвешивала', 3),
  neuterPast: Word('отвешивало', 3),
  pluralPast: Word('отвешивали', 3),
  imperativeInformal: Word('отвешивай', 3),
  imperativeFormal: Word('отвешивайте', 3),
  imperfect: [],
};

perfectVerbs.set(отвешивать.name.text, отвешивать);

export { отвешивать };