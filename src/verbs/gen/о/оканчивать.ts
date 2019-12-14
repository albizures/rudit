import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оканчивать: PerfectVerb = {
  name: Word('оканчивать', 2),
  singular1stPerson: Word('оканчиваю', 2),
  singular2ndPerson: Word('оканчиваешь', 2),
  singular3rdPerson: Word('оканчивает', 2),
  plural1stPerson: Word('оканчиваем', 2),
  plural2ndPerson: Word('оканчиваете', 2),
  plural3rdPerson: Word('оканчивают', 2),
  masculinePast: Word('оканчивал', 2),
  femininePast: Word('оканчивала', 2),
  neuterPast: Word('оканчивало', 2),
  pluralPast: Word('оканчивали', 2),
  imperativeInformal: Word('оканчивай', 2),
  imperativeFormal: Word('оканчивайте', 2),
  imperfect: ['окончить'],
};

perfectVerbs.set(оканчивать.name.text, оканчивать);

export { оканчивать };