import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбрызгивать: PerfectVerb = {
  name: Word('взбрызгивать', 4),
  singular1stPerson: Word('взбрызгиваю', 4),
  singular2ndPerson: Word('взбрызгиваешь', 4),
  singular3rdPerson: Word('взбрызгивает', 4),
  plural1stPerson: Word('взбрызгиваем', 4),
  plural2ndPerson: Word('взбрызгиваете', 4),
  plural3rdPerson: Word('взбрызгивают', 4),
  masculinePast: Word('взбрызгивал', 4),
  femininePast: Word('взбрызгивала', 4),
  neuterPast: Word('взбрызгивало', 4),
  pluralPast: Word('взбрызгивали', 4),
  imperativeInformal: Word('взбрызгивай', 4),
  imperativeFormal: Word('взбрызгивайте', 4),
  imperfect: [],
};

perfectVerbs.set(взбрызгивать.name.text, взбрызгивать);

export { взбрызгивать };