import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдёргивать: PerfectVerb = {
  name: Word('отдёргивать', 3),
  singular1stPerson: Word('отдёргиваю', 3),
  singular2ndPerson: Word('отдёргиваешь', 3),
  singular3rdPerson: Word('отдёргивает', 3),
  plural1stPerson: Word('отдёргиваем', 3),
  plural2ndPerson: Word('отдёргиваете', 3),
  plural3rdPerson: Word('отдёргивают', 3),
  masculinePast: Word('отдёргивал', 3),
  femininePast: Word('отдёргивала', 3),
  neuterPast: Word('отдёргивало', 3),
  pluralPast: Word('отдёргивали', 3),
  imperativeInformal: Word('отдёргивай', 3),
  imperativeFormal: Word('отдёргивайте', 3),
  imperfect: [],
};

perfectVerbs.set(отдёргивать.name.text, отдёргивать);

export { отдёргивать };