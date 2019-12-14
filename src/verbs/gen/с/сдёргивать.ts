import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдёргивать: PerfectVerb = {
  name: Word('сдёргивать', 2),
  singular1stPerson: Word('сдёргиваю', 2),
  singular2ndPerson: Word('сдёргиваешь', 2),
  singular3rdPerson: Word('сдёргивает', 2),
  plural1stPerson: Word('сдёргиваем', 2),
  plural2ndPerson: Word('сдёргиваете', 2),
  plural3rdPerson: Word('сдёргивают', 2),
  masculinePast: Word('сдёргивал', 2),
  femininePast: Word('сдёргивала', 2),
  neuterPast: Word('сдёргивало', 2),
  pluralPast: Word('сдёргивали', 2),
  imperativeInformal: Word('сдёргивай', 2),
  imperativeFormal: Word('сдёргивайте', 2),
  imperfect: [],
};

perfectVerbs.set(сдёргивать.name.text, сдёргивать);

export { сдёргивать };