import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплёскивать: PerfectVerb = {
  name: Word('расплёскивать', 1),
  singular1stPerson: Word('расплёскиваю', 1),
  singular2ndPerson: Word('расплёскиваешь', 1),
  singular3rdPerson: Word('расплёскивает', 1),
  plural1stPerson: Word('расплёскиваем', 1),
  plural2ndPerson: Word('расплёскиваете', 1),
  plural3rdPerson: Word('расплёскивают', 1),
  masculinePast: Word('расплёскивал', 1),
  femininePast: Word('расплёскивала', 1),
  neuterPast: Word('расплёскивало', 1),
  pluralPast: Word('расплёскивали', 1),
  imperativeInformal: Word('расплёскивай', 1),
  imperativeFormal: Word('расплёскивайте', 1),
  imperfect: [],
};

perfectVerbs.set(расплёскивать.name.text, расплёскивать);

export { расплёскивать };