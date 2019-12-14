import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растаскивать: PerfectVerb = {
  name: Word('растаскивать', 4),
  singular1stPerson: Word('растаскиваю', 4),
  singular2ndPerson: Word('растаскиваешь', 4),
  singular3rdPerson: Word('растаскивает', 4),
  plural1stPerson: Word('растаскиваем', 4),
  plural2ndPerson: Word('растаскиваете', 4),
  plural3rdPerson: Word('растаскивают', 4),
  masculinePast: Word('растаскивал', 4),
  femininePast: Word('растаскивала', 4),
  neuterPast: Word('растаскивало', 4),
  pluralPast: Word('растаскивали', 4),
  imperativeInformal: Word('растаскивай', 4),
  imperativeFormal: Word('растаскивайте', 4),
  imperfect: [],
};

perfectVerbs.set(растаскивать.name.text, растаскивать);

export { растаскивать };