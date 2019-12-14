import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдёргивать: PerfectVerb = {
  name: Word('отдёргивать', 8),
  singular1stPerson: Word('отдёргиваю', 8),
  singular2ndPerson: Word('отдёргиваешь', 8),
  singular3rdPerson: Word('отдёргивает', 8),
  plural1stPerson: Word('отдёргиваем', 8),
  plural2ndPerson: Word('отдёргиваете', 8),
  plural3rdPerson: Word('отдёргивают', 8),
  masculinePast: Word('отдёргивал', 8),
  femininePast: Word('отдёргивала', 8),
  neuterPast: Word('отдёргивало', 8),
  pluralPast: Word('отдёргивали', 8),
  imperativeInformal: Word('отдёргивай', 8),
  imperativeFormal: Word('отдёргивайте', 8),
  imperfect: [],
};

perfectVerbs.set(отдёргивать.name.text, отдёргивать);

export { отдёргивать };