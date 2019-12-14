import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озабочивать: PerfectVerb = {
  name: Word('озабочивать', 4),
  singular1stPerson: Word('озабочиваю', 4),
  singular2ndPerson: Word('озабочиваешь', 4),
  singular3rdPerson: Word('озабочивает', 4),
  plural1stPerson: Word('озабочиваем', 4),
  plural2ndPerson: Word('озабочиваете', 4),
  plural3rdPerson: Word('озабочивают', 4),
  masculinePast: Word('озабочивал', 4),
  femininePast: Word('озабочивала', 4),
  neuterPast: Word('озабочивало', 4),
  pluralPast: Word('озабочивали', 4),
  imperativeInformal: Word('озабочивай', 4),
  imperativeFormal: Word('озабочивайте', 4),
  imperfect: [],
};

perfectVerbs.set(озабочивать.name.text, озабочивать);

export { озабочивать };