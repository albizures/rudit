import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промачивать: PerfectVerb = {
  name: Word('промачивать', 4),
  singular1stPerson: Word('промачиваю', 4),
  singular2ndPerson: Word('промачиваешь', 4),
  singular3rdPerson: Word('промачивает', 4),
  plural1stPerson: Word('промачиваем', 4),
  plural2ndPerson: Word('промачиваете', 4),
  plural3rdPerson: Word('промачивают', 4),
  masculinePast: Word('промачивал', 4),
  femininePast: Word('промачивала', 4),
  neuterPast: Word('промачивало', 4),
  pluralPast: Word('промачивали', 4),
  imperativeInformal: Word('промачивай', 4),
  imperativeFormal: Word('промачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(промачивать.name.text, промачивать);

export { промачивать };