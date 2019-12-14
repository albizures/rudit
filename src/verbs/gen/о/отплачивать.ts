import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отплачивать: PerfectVerb = {
  name: Word('отплачивать', 4),
  singular1stPerson: Word('отплачиваю', 4),
  singular2ndPerson: Word('отплачиваешь', 4),
  singular3rdPerson: Word('отплачивает', 4),
  plural1stPerson: Word('отплачиваем', 4),
  plural2ndPerson: Word('отплачиваете', 4),
  plural3rdPerson: Word('отплачивают', 4),
  masculinePast: Word('отплачивал', 4),
  femininePast: Word('отплачивала', 4),
  neuterPast: Word('отплачивало', 4),
  pluralPast: Word('отплачивали', 4),
  imperativeInformal: Word('отплачивай', 4),
  imperativeFormal: Word('отплачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(отплачивать.name.text, отплачивать);

export { отплачивать };