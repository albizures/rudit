import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замачивать: PerfectVerb = {
  name: Word('замачивать', 3),
  singular1stPerson: Word('замачиваю', 3),
  singular2ndPerson: Word('замачиваешь', 3),
  singular3rdPerson: Word('замачивает', 3),
  plural1stPerson: Word('замачиваем', 3),
  plural2ndPerson: Word('замачиваете', 3),
  plural3rdPerson: Word('замачивают', 3),
  masculinePast: Word('замачивал', 3),
  femininePast: Word('замачивала', 3),
  neuterPast: Word('замачивало', 3),
  pluralPast: Word('замачивали', 3),
  imperativeInformal: Word('замачивай', 3),
  imperativeFormal: Word('замачивайте', 3),
  imperfect: [],
};

perfectVerbs.set(замачивать.name.text, замачивать);

export { замачивать };