import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укачивать: PerfectVerb = {
  name: Word('укачивать', 2),
  singular1stPerson: Word('укачиваю', 2),
  singular2ndPerson: Word('укачиваешь', 2),
  singular3rdPerson: Word('укачивает', 2),
  plural1stPerson: Word('укачиваем', 2),
  plural2ndPerson: Word('укачиваете', 2),
  plural3rdPerson: Word('укачивают', 2),
  masculinePast: Word('укачивал', 2),
  femininePast: Word('укачивала', 2),
  neuterPast: Word('укачивало', 2),
  pluralPast: Word('укачивали', 2),
  imperativeInformal: Word('укачивай', 2),
  imperativeFormal: Word('укачивайте', 2),
  imperfect: [],
};

perfectVerbs.set(укачивать.name.text, укачивать);

export { укачивать };