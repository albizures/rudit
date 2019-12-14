import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одурачивать: PerfectVerb = {
  name: Word('одурачивать', 4),
  singular1stPerson: Word('одурачиваю', 4),
  singular2ndPerson: Word('одурачиваешь', 4),
  singular3rdPerson: Word('одурачивает', 4),
  plural1stPerson: Word('одурачиваем', 4),
  plural2ndPerson: Word('одурачиваете', 4),
  plural3rdPerson: Word('одурачивают', 4),
  masculinePast: Word('одурачивал', 4),
  femininePast: Word('одурачивала', 4),
  neuterPast: Word('одурачивало', 4),
  pluralPast: Word('одурачивали', 4),
  imperativeInformal: Word('одурачивай', 4),
  imperativeFormal: Word('одурачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(одурачивать.name.text, одурачивать);

export { одурачивать };