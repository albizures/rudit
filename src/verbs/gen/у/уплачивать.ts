import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уплачивать: PerfectVerb = {
  name: Word('уплачивать', 3),
  singular1stPerson: Word('уплачиваю', 3),
  singular2ndPerson: Word('уплачиваешь', 3),
  singular3rdPerson: Word('уплачивает', 3),
  plural1stPerson: Word('уплачиваем', 3),
  plural2ndPerson: Word('уплачиваете', 3),
  plural3rdPerson: Word('уплачивают', 3),
  masculinePast: Word('уплачивал', 3),
  femininePast: Word('уплачивала', 3),
  neuterPast: Word('уплачивало', 3),
  pluralPast: Word('уплачивали', 3),
  imperativeInformal: Word('уплачивай', 3),
  imperativeFormal: Word('уплачивайте', 3),
  imperfect: [],
};

perfectVerbs.set(уплачивать.name.text, уплачивать);

export { уплачивать };