import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окручивать: PerfectVerb = {
  name: Word('окручивать', 3),
  singular1stPerson: Word('окручиваю', 3),
  singular2ndPerson: Word('окручиваешь', 3),
  singular3rdPerson: Word('окручивает', 3),
  plural1stPerson: Word('окручиваем', 3),
  plural2ndPerson: Word('окручиваете', 3),
  plural3rdPerson: Word('окручивают', 3),
  masculinePast: Word('окручивал', 3),
  femininePast: Word('окручивала', 3),
  neuterPast: Word('окручивало', 3),
  pluralPast: Word('окручивали', 3),
  imperativeInformal: Word('окручивай', 3),
  imperativeFormal: Word('окручивайте', 3),
  imperfect: [],
};

perfectVerbs.set(окручивать.name.text, окручивать);

export { окручивать };