import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдёргивать: PerfectVerb = {
  name: Word('выдёргивать', 8),
  singular1stPerson: Word('выдёргиваю', 8),
  singular2ndPerson: Word('выдёргиваешь', 8),
  singular3rdPerson: Word('выдёргивает', 8),
  plural1stPerson: Word('выдёргиваем', 8),
  plural2ndPerson: Word('выдёргиваете', 8),
  plural3rdPerson: Word('выдёргивают', 8),
  masculinePast: Word('выдёргивал', 8),
  femininePast: Word('выдёргивала', 8),
  neuterPast: Word('выдёргивало', 8),
  pluralPast: Word('выдёргивали', 8),
  imperativeInformal: Word('выдёргивай', 8),
  imperativeFormal: Word('выдёргивайте', 8),
  imperfect: [],
};

perfectVerbs.set(выдёргивать.name.text, выдёргивать);

export { выдёргивать };