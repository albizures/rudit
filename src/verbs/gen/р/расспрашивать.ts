import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расспрашивать: PerfectVerb = {
  name: Word('расспрашивать', 6),
  singular1stPerson: Word('расспрашиваю', 6),
  singular2ndPerson: Word('расспрашиваешь', 6),
  singular3rdPerson: Word('расспрашивает', 6),
  plural1stPerson: Word('расспрашиваем', 6),
  plural2ndPerson: Word('расспрашиваете', 6),
  plural3rdPerson: Word('расспрашивают', 6),
  masculinePast: Word('расспрашивал', 6),
  femininePast: Word('расспрашивала', 6),
  neuterPast: Word('расспрашивало', 6),
  pluralPast: Word('расспрашивали', 6),
  imperativeInformal: Word('расспрашивай', 6),
  imperativeFormal: Word('расспрашивайте', 6),
  imperfect: [],
};

perfectVerbs.set(расспрашивать.name.text, расспрашивать);

export { расспрашивать };