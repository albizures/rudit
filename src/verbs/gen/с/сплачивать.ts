import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплачивать: PerfectVerb = {
  name: Word('сплачивать', 3),
  singular1stPerson: Word('сплачиваю', 3),
  singular2ndPerson: Word('сплачиваешь', 3),
  singular3rdPerson: Word('сплачивает', 3),
  plural1stPerson: Word('сплачиваем', 3),
  plural2ndPerson: Word('сплачиваете', 3),
  plural3rdPerson: Word('сплачивают', 3),
  masculinePast: Word('сплачивал', 3),
  femininePast: Word('сплачивала', 3),
  neuterPast: Word('сплачивало', 3),
  pluralPast: Word('сплачивали', 3),
  imperativeInformal: Word('сплачивай', 3),
  imperativeFormal: Word('сплачивайте', 3),
  imperfect: [],
};

perfectVerbs.set(сплачивать.name.text, сплачивать);

export { сплачивать };