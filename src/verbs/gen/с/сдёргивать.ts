import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдёргивать: PerfectVerb = {
  name: Word('сдёргивать', 7),
  singular1stPerson: Word('сдёргиваю', 7),
  singular2ndPerson: Word('сдёргиваешь', 7),
  singular3rdPerson: Word('сдёргивает', 7),
  plural1stPerson: Word('сдёргиваем', 7),
  plural2ndPerson: Word('сдёргиваете', 7),
  plural3rdPerson: Word('сдёргивают', 7),
  masculinePast: Word('сдёргивал', 7),
  femininePast: Word('сдёргивала', 7),
  neuterPast: Word('сдёргивало', 7),
  pluralPast: Word('сдёргивали', 7),
  imperativeInformal: Word('сдёргивай', 7),
  imperativeFormal: Word('сдёргивайте', 7),
  imperfect: [],
};

perfectVerbs.set(сдёргивать.name.text, сдёргивать);

export { сдёргивать };