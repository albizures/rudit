import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застращивать: PerfectVerb = {
  name: Word('застращивать', 5),
  singular1stPerson: Word('застращиваю', 5),
  singular2ndPerson: Word('застращиваешь', 5),
  singular3rdPerson: Word('застращивает', 5),
  plural1stPerson: Word('застращиваем', 5),
  plural2ndPerson: Word('застращиваете', 5),
  plural3rdPerson: Word('застращивают', 5),
  masculinePast: Word('застращивал', 5),
  femininePast: Word('застращивала', 5),
  neuterPast: Word('застращивало', 5),
  pluralPast: Word('застращивали', 5),
  imperativeInformal: Word('застращивай', 5),
  imperativeFormal: Word('застращивайте', 5),
  imperfect: [],
};

perfectVerbs.set(застращивать.name.text, застращивать);

export { застращивать };