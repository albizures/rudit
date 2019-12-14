import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скачивать: PerfectVerb = {
  name: Word('скачивать', 2),
  singular1stPerson: Word('скачиваю', 2),
  singular2ndPerson: Word('скачиваешь', 2),
  singular3rdPerson: Word('скачивает', 2),
  plural1stPerson: Word('скачиваем', 2),
  plural2ndPerson: Word('скачиваете', 2),
  plural3rdPerson: Word('скачивают', 2),
  masculinePast: Word('скачивал', 2),
  femininePast: Word('скачивала', 2),
  neuterPast: Word('скачивало', 2),
  pluralPast: Word('скачивали', 2),
  imperativeInformal: Word('скачивай', 2),
  imperativeFormal: Word('скачивайте', 2),
  imperfect: ['скачать'],
};

perfectVerbs.set(скачивать.name.text, скачивать);

export { скачивать };