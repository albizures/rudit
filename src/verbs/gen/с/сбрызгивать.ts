import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбрызгивать: PerfectVerb = {
  name: Word('сбрызгивать', 3),
  singular1stPerson: Word('сбрызгиваю', 3),
  singular2ndPerson: Word('сбрызгиваешь', 3),
  singular3rdPerson: Word('сбрызгивает', 3),
  plural1stPerson: Word('сбрызгиваем', 3),
  plural2ndPerson: Word('сбрызгиваете', 3),
  plural3rdPerson: Word('сбрызгивают', 3),
  masculinePast: Word('сбрызгивал', 3),
  femininePast: Word('сбрызгивала', 3),
  neuterPast: Word('сбрызгивало', 3),
  pluralPast: Word('сбрызгивали', 3),
  imperativeInformal: Word('сбрызгивай', 3),
  imperativeFormal: Word('сбрызгивайте', 3),
  imperfect: [],
};

perfectVerbs.set(сбрызгивать.name.text, сбрызгивать);

export { сбрызгивать };