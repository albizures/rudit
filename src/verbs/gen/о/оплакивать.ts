import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оплакивать: PerfectVerb = {
  name: Word('оплакивать', 3),
  singular1stPerson: Word('оплакиваю', 3),
  singular2ndPerson: Word('оплакиваешь', 3),
  singular3rdPerson: Word('оплакивает', 3),
  plural1stPerson: Word('оплакиваем', 3),
  plural2ndPerson: Word('оплакиваете', 3),
  plural3rdPerson: Word('оплакивают', 3),
  masculinePast: Word('оплакивал', 3),
  femininePast: Word('оплакивала', 3),
  neuterPast: Word('оплакивало', 3),
  pluralPast: Word('оплакивали', 3),
  imperativeInformal: Word('оплакивай', 3),
  imperativeFormal: Word('оплакивайте', 3),
  imperfect: ['оплакать'],
};

perfectVerbs.set(оплакивать.name.text, оплакивать);

export { оплакивать };