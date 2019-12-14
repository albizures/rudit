import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвинчивать: PerfectVerb = {
  name: Word('отвинчивать', 3),
  singular1stPerson: Word('отвинчиваю', 3),
  singular2ndPerson: Word('отвинчиваешь', 3),
  singular3rdPerson: Word('отвинчивает', 3),
  plural1stPerson: Word('отвинчиваем', 3),
  plural2ndPerson: Word('отвинчиваете', 3),
  plural3rdPerson: Word('отвинчивают', 3),
  masculinePast: Word('отвинчивал', 3),
  femininePast: Word('отвинчивала', 3),
  neuterPast: Word('отвинчивало', 3),
  pluralPast: Word('отвинчивали', 3),
  imperativeInformal: Word('отвинчивай', 3),
  imperativeFormal: Word('отвинчивайте', 3),
  imperfect: [],
};

perfectVerbs.set(отвинчивать.name.text, отвинчивать);

export { отвинчивать };