import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заращивать: PerfectVerb = {
  name: Word('заращивать', 3),
  singular1stPerson: Word('заращиваю', 3),
  singular2ndPerson: Word('заращиваешь', 3),
  singular3rdPerson: Word('заращивает', 3),
  plural1stPerson: Word('заращиваем', 3),
  plural2ndPerson: Word('заращиваете', 3),
  plural3rdPerson: Word('заращивают', 3),
  masculinePast: Word('заращивал', 3),
  femininePast: Word('заращивала', 3),
  neuterPast: Word('заращивало', 3),
  pluralPast: Word('заращивали', 3),
  imperativeInformal: Word('заращивай', 3),
  imperativeFormal: Word('заращивайте', 3),
  imperfect: [],
};

perfectVerbs.set(заращивать.name.text, заращивать);

export { заращивать };