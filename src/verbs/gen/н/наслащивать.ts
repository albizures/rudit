import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наслащивать: PerfectVerb = {
  name: Word('наслащивать', 4),
  singular1stPerson: Word('наслащиваю', 4),
  singular2ndPerson: Word('наслащиваешь', 4),
  singular3rdPerson: Word('наслащивает', 4),
  plural1stPerson: Word('наслащиваем', 4),
  plural2ndPerson: Word('наслащиваете', 4),
  plural3rdPerson: Word('наслащивают', 4),
  masculinePast: Word('наслащивал', 4),
  femininePast: Word('наслащивала', 4),
  neuterPast: Word('наслащивало', 4),
  pluralPast: Word('наслащивали', 4),
  imperativeInformal: Word('наслащивай', 4),
  imperativeFormal: Word('наслащивайте', 4),
  imperfect: [],
};

perfectVerbs.set(наслащивать.name.text, наслащивать);

export { наслащивать };