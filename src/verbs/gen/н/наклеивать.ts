import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наклеивать: PerfectVerb = {
  name: Word('наклеивать', 4),
  singular1stPerson: Word('наклеиваю', 4),
  singular2ndPerson: Word('наклеиваешь', 4),
  singular3rdPerson: Word('наклеивает', 4),
  plural1stPerson: Word('наклеиваем', 4),
  plural2ndPerson: Word('наклеиваете', 4),
  plural3rdPerson: Word('наклеивают', 4),
  masculinePast: Word('наклеивал', 4),
  femininePast: Word('наклеивала', 4),
  neuterPast: Word('наклеивало', 4),
  pluralPast: Word('наклеивали', 4),
  imperativeInformal: Word('наклеивай', 4),
  imperativeFormal: Word('наклеивайте', 4),
  imperfect: [],
};

perfectVerbs.set(наклеивать.name.text, наклеивать);

export { наклеивать };