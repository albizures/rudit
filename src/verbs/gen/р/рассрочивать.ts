import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассрочивать: PerfectVerb = {
  name: Word('рассрочивать', 5),
  singular1stPerson: Word('рассрочиваю', 5),
  singular2ndPerson: Word('рассрочиваешь', 5),
  singular3rdPerson: Word('рассрочивает', 5),
  plural1stPerson: Word('рассрочиваем', 5),
  plural2ndPerson: Word('рассрочиваете', 5),
  plural3rdPerson: Word('рассрочивают', 5),
  masculinePast: Word('рассрочивал', 5),
  femininePast: Word('рассрочивала', 5),
  neuterPast: Word('рассрочивало', 5),
  pluralPast: Word('рассрочивали', 5),
  imperativeInformal: Word('рассрочивай', 5),
  imperativeFormal: Word('рассрочивайте', 5),
  imperfect: [],
};

perfectVerbs.set(рассрочивать.name.text, рассрочивать);

export { рассрочивать };