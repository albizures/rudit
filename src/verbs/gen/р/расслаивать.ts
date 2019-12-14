import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расслаивать: PerfectVerb = {
  name: Word('расслаивать', 5),
  singular1stPerson: Word('расслаиваю', 5),
  singular2ndPerson: Word('расслаиваешь', 5),
  singular3rdPerson: Word('расслаивает', 5),
  plural1stPerson: Word('расслаиваем', 5),
  plural2ndPerson: Word('расслаиваете', 5),
  plural3rdPerson: Word('расслаивают', 5),
  masculinePast: Word('расслаивал', 5),
  femininePast: Word('расслаивала', 5),
  neuterPast: Word('расслаивало', 5),
  pluralPast: Word('расслаивали', 5),
  imperativeInformal: Word('расслаивай', 5),
  imperativeFormal: Word('расслаивайте', 5),
  imperfect: [],
};

perfectVerbs.set(расслаивать.name.text, расслаивать);

export { расслаивать };