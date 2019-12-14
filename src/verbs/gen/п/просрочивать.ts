import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просрочивать: PerfectVerb = {
  name: Word('просрочивать', 5),
  singular1stPerson: Word('просрочиваю', 5),
  singular2ndPerson: Word('просрочиваешь', 5),
  singular3rdPerson: Word('просрочивает', 5),
  plural1stPerson: Word('просрочиваем', 5),
  plural2ndPerson: Word('просрочиваете', 5),
  plural3rdPerson: Word('просрочивают', 5),
  masculinePast: Word('просрочивал', 5),
  femininePast: Word('просрочивала', 5),
  neuterPast: Word('просрочивало', 5),
  pluralPast: Word('просрочивали', 5),
  imperativeInformal: Word('просрочивай', 5),
  imperativeFormal: Word('просрочивайте', 5),
  imperfect: [],
};

perfectVerbs.set(просрочивать.name.text, просрочивать);

export { просрочивать };