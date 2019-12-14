import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдёргивать: PerfectVerb = {
  name: Word('выдёргивать', 3),
  singular1stPerson: Word('выдёргиваю', 3),
  singular2ndPerson: Word('выдёргиваешь', 3),
  singular3rdPerson: Word('выдёргивает', 3),
  plural1stPerson: Word('выдёргиваем', 3),
  plural2ndPerson: Word('выдёргиваете', 3),
  plural3rdPerson: Word('выдёргивают', 3),
  masculinePast: Word('выдёргивал', 3),
  femininePast: Word('выдёргивала', 3),
  neuterPast: Word('выдёргивало', 3),
  pluralPast: Word('выдёргивали', 3),
  imperativeInformal: Word('выдёргивай', 3),
  imperativeFormal: Word('выдёргивайте', 3),
  imperfect: [],
};

perfectVerbs.set(выдёргивать.name.text, выдёргивать);

export { выдёргивать };