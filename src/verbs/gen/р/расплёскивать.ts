import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплёскивать: PerfectVerb = {
  name: Word('расплёскивать', 5),
  singular1stPerson: Word('расплёскиваю', 5),
  singular2ndPerson: Word('расплёскиваешь', 5),
  singular3rdPerson: Word('расплёскивает', 5),
  plural1stPerson: Word('расплёскиваем', 5),
  plural2ndPerson: Word('расплёскиваете', 5),
  plural3rdPerson: Word('расплёскивают', 5),
  masculinePast: Word('расплёскивал', 5),
  femininePast: Word('расплёскивала', 5),
  neuterPast: Word('расплёскивало', 5),
  pluralPast: Word('расплёскивали', 5),
  imperativeInformal: Word('расплёскивай', 5),
  imperativeFormal: Word('расплёскивайте', 5),
  imperfect: [],
};

perfectVerbs.set(расплёскивать.name.text, расплёскивать);

export { расплёскивать };