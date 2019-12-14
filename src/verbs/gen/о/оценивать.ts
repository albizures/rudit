import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оценивать: PerfectVerb = {
  name: Word('оценивать', 2),
  singular1stPerson: Word('оцениваю', 2),
  singular2ndPerson: Word('оцениваешь', 2),
  singular3rdPerson: Word('оценивает', 2),
  plural1stPerson: Word('оцениваем', 2),
  plural2ndPerson: Word('оцениваете', 2),
  plural3rdPerson: Word('оценивают', 2),
  masculinePast: Word('оценивал', 2),
  femininePast: Word('оценивала', 2),
  neuterPast: Word('оценивало', 2),
  pluralPast: Word('оценивали', 2),
  imperativeInformal: Word('оценивай', 2),
  imperativeFormal: Word('оценивайте', 2),
  imperfect: ['оценить'],
};

perfectVerbs.set(оценивать.name.text, оценивать);

export { оценивать };