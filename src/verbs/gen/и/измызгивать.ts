import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измызгивать: PerfectVerb = {
  name: Word('измызгивать', 3),
  singular1stPerson: Word('измызгиваю', 3),
  singular2ndPerson: Word('измызгиваешь', 3),
  singular3rdPerson: Word('измызгивает', 3),
  plural1stPerson: Word('измызгиваем', 3),
  plural2ndPerson: Word('измызгиваете', 3),
  plural3rdPerson: Word('измызгивают', 3),
  masculinePast: Word('измызгивал', 3),
  femininePast: Word('измызгивала', 3),
  neuterPast: Word('измызгивало', 3),
  pluralPast: Word('измызгивали', 3),
  imperativeInformal: Word('измызгивай', 3),
  imperativeFormal: Word('измызгивайте', 3),
  imperfect: [],
};

perfectVerbs.set(измызгивать.name.text, измызгивать);

export { измызгивать };