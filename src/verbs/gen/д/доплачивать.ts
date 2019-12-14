import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доплачивать: PerfectVerb = {
  name: Word('доплачивать', 4),
  singular1stPerson: Word('доплачиваю', 4),
  singular2ndPerson: Word('доплачиваешь', 4),
  singular3rdPerson: Word('доплачивает', 4),
  plural1stPerson: Word('доплачиваем', 4),
  plural2ndPerson: Word('доплачиваете', 4),
  plural3rdPerson: Word('доплачивают', 4),
  masculinePast: Word('доплачивал', 4),
  femininePast: Word('доплачивала', 4),
  neuterPast: Word('доплачивало', 4),
  pluralPast: Word('доплачивали', 4),
  imperativeInformal: Word('доплачивай', 4),
  imperativeFormal: Word('доплачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(доплачивать.name.text, доплачивать);

export { доплачивать };