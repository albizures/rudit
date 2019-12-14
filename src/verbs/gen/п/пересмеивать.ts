import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересмеивать: PerfectVerb = {
  name: Word('пересмеивать', 6),
  singular1stPerson: Word('пересмеиваю', 6),
  singular2ndPerson: Word('пересмеиваешь', 6),
  singular3rdPerson: Word('пересмеивает', 6),
  plural1stPerson: Word('пересмеиваем', 6),
  plural2ndPerson: Word('пересмеиваете', 6),
  plural3rdPerson: Word('пересмеивают', 6),
  masculinePast: Word('пересмеивал', 6),
  femininePast: Word('пересмеивала', 6),
  neuterPast: Word('пересмеивало', 6),
  pluralPast: Word('пересмеивали', 6),
  imperativeInformal: Word('пересмеивай', 6),
  imperativeFormal: Word('пересмеивайте', 6),
  imperfect: [],
};

perfectVerbs.set(пересмеивать.name.text, пересмеивать);

export { пересмеивать };