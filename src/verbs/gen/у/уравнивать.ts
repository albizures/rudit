import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уравнивать: PerfectVerb = {
  name: Word('уравнивать', 2),
  singular1stPerson: Word('уравниваю', 2),
  singular2ndPerson: Word('уравниваешь', 2),
  singular3rdPerson: Word('уравнивает', 2),
  plural1stPerson: Word('уравниваем', 2),
  plural2ndPerson: Word('уравниваете', 2),
  plural3rdPerson: Word('уравнивают', 2),
  masculinePast: Word('уравнивал', 2),
  femininePast: Word('уравнивала', 2),
  neuterPast: Word('уравнивало', 2),
  pluralPast: Word('уравнивали', 2),
  imperativeInformal: Word('уравнивай', 2),
  imperativeFormal: Word('уравнивайте', 2),
  imperfect: [],
};

perfectVerbs.set(уравнивать.name.text, уравнивать);

export { уравнивать };