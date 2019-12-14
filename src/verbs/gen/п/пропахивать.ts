import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропахивать: PerfectVerb = {
  name: Word('пропахивать', 4),
  singular1stPerson: Word('пропахиваю', 4),
  singular2ndPerson: Word('пропахиваешь', 4),
  singular3rdPerson: Word('пропахивает', 4),
  plural1stPerson: Word('пропахиваем', 4),
  plural2ndPerson: Word('пропахиваете', 4),
  plural3rdPerson: Word('пропахивают', 4),
  masculinePast: Word('пропахивал', 4),
  femininePast: Word('пропахивала', 4),
  neuterPast: Word('пропахивало', 4),
  pluralPast: Word('пропахивали', 4),
  imperativeInformal: Word('пропахивай', 4),
  imperativeFormal: Word('пропахивайте', 4),
  imperfect: [],
};

perfectVerbs.set(пропахивать.name.text, пропахивать);

export { пропахивать };