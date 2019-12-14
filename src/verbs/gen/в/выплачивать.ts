import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплачивать: PerfectVerb = {
  name: Word('выплачивать', 4),
  singular1stPerson: Word('выплачиваю', 4),
  singular2ndPerson: Word('выплачиваешь', 4),
  singular3rdPerson: Word('выплачивает', 4),
  plural1stPerson: Word('выплачиваем', 4),
  plural2ndPerson: Word('выплачиваете', 4),
  plural3rdPerson: Word('выплачивают', 4),
  masculinePast: Word('выплачивал', 4),
  femininePast: Word('выплачивала', 4),
  neuterPast: Word('выплачивало', 4),
  pluralPast: Word('выплачивали', 4),
  imperativeInformal: Word('выплачивай', 4),
  imperativeFormal: Word('выплачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(выплачивать.name.text, выплачивать);

export { выплачивать };