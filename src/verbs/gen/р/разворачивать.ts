import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разворачивать: PerfectVerb = {
  name: Word('разворачивать', 6),
  singular1stPerson: Word('разворачиваю', 6),
  singular2ndPerson: Word('разворачиваешь', 6),
  singular3rdPerson: Word('разворачивает', 6),
  plural1stPerson: Word('разворачиваем', 6),
  plural2ndPerson: Word('разворачиваете', 6),
  plural3rdPerson: Word('разворачивают', 6),
  masculinePast: Word('разворачивал', 6),
  femininePast: Word('разворачивала', 6),
  neuterPast: Word('разворачивало', 6),
  pluralPast: Word('разворачивали', 6),
  imperativeInformal: Word('разворачивай', 6),
  imperativeFormal: Word('разворачивайте', 6),
  imperfect: [],
};

perfectVerbs.set(разворачивать.name.text, разворачивать);

export { разворачивать };