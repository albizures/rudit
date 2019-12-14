import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поворачивать: PerfectVerb = {
  name: Word('поворачивать', 5),
  singular1stPerson: Word('поворачиваю', 5),
  singular2ndPerson: Word('поворачиваешь', 5),
  singular3rdPerson: Word('поворачивает', 5),
  plural1stPerson: Word('поворачиваем', 5),
  plural2ndPerson: Word('поворачиваете', 5),
  plural3rdPerson: Word('поворачивают', 5),
  masculinePast: Word('поворачивал', 5),
  femininePast: Word('поворачивала', 5),
  neuterPast: Word('поворачивало', 5),
  pluralPast: Word('поворачивали', 5),
  imperativeInformal: Word('поворачивай', 5),
  imperativeFormal: Word('поворачивайте', 5),
  imperfect: ['повернуть'],
};

perfectVerbs.set(поворачивать.name.text, поворачивать);

export { поворачивать };