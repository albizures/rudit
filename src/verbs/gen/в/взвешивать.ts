import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взвешивать: PerfectVerb = {
  name: Word('взвешивать', 3),
  singular1stPerson: Word('взвешиваю', 3),
  singular2ndPerson: Word('взвешиваешь', 3),
  singular3rdPerson: Word('взвешивает', 3),
  plural1stPerson: Word('взвешиваем', 3),
  plural2ndPerson: Word('взвешиваете', 3),
  plural3rdPerson: Word('взвешивают', 3),
  masculinePast: Word('взвешивал', 3),
  femininePast: Word('взвешивала', 3),
  neuterPast: Word('взвешивало', 3),
  pluralPast: Word('взвешивали', 3),
  imperativeInformal: Word('взвешивай', 3),
  imperativeFormal: Word('взвешивайте', 3),
  imperfect: ['взвесить'],
};

perfectVerbs.set(взвешивать.name.text, взвешивать);

export { взвешивать };