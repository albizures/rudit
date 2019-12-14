import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упрочивать: PerfectVerb = {
  name: Word('упрочивать', 3),
  singular1stPerson: Word('упрочиваю', 3),
  singular2ndPerson: Word('упрочиваешь', 3),
  singular3rdPerson: Word('упрочивает', 3),
  plural1stPerson: Word('упрочиваем', 3),
  plural2ndPerson: Word('упрочиваете', 3),
  plural3rdPerson: Word('упрочивают', 3),
  masculinePast: Word('упрочивал', 3),
  femininePast: Word('упрочивала', 3),
  neuterPast: Word('упрочивало', 3),
  pluralPast: Word('упрочивали', 3),
  imperativeInformal: Word('упрочивай', 3),
  imperativeFormal: Word('упрочивайте', 3),
  imperfect: [],
};

perfectVerbs.set(упрочивать.name.text, упрочивать);

export { упрочивать };