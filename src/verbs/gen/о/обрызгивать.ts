import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрызгивать: PerfectVerb = {
  name: Word('обрызгивать', 3),
  singular1stPerson: Word('обрызгиваю', 3),
  singular2ndPerson: Word('обрызгиваешь', 3),
  singular3rdPerson: Word('обрызгивает', 3),
  plural1stPerson: Word('обрызгиваем', 3),
  plural2ndPerson: Word('обрызгиваете', 3),
  plural3rdPerson: Word('обрызгивают', 3),
  masculinePast: Word('обрызгивал', 3),
  femininePast: Word('обрызгивала', 3),
  neuterPast: Word('обрызгивало', 3),
  pluralPast: Word('обрызгивали', 3),
  imperativeInformal: Word('обрызгивай', 3),
  imperativeFormal: Word('обрызгивайте', 3),
  imperfect: [],
};

perfectVerbs.set(обрызгивать.name.text, обрызгивать);

export { обрызгивать };