import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замащивать: PerfectVerb = {
  name: Word('замащивать', 3),
  singular1stPerson: Word('замащиваю', 3),
  singular2ndPerson: Word('замащиваешь', 3),
  singular3rdPerson: Word('замащивает', 3),
  plural1stPerson: Word('замащиваем', 3),
  plural2ndPerson: Word('замащиваете', 3),
  plural3rdPerson: Word('замащивают', 3),
  masculinePast: Word('замащивал', 3),
  femininePast: Word('замащивала', 3),
  neuterPast: Word('замащивало', 3),
  pluralPast: Word('замащивали', 3),
  imperativeInformal: Word('замащивай', 3),
  imperativeFormal: Word('замащивайте', 3),
  imperfect: [],
};

perfectVerbs.set(замащивать.name.text, замащивать);

export { замащивать };