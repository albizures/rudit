import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задраивать: PerfectVerb = {
  name: Word('задраивать', 4),
  singular1stPerson: Word('задраиваю', 4),
  singular2ndPerson: Word('задраиваешь', 4),
  singular3rdPerson: Word('задраивает', 4),
  plural1stPerson: Word('задраиваем', 4),
  plural2ndPerson: Word('задраиваете', 4),
  plural3rdPerson: Word('задраивают', 4),
  masculinePast: Word('задраивал', 4),
  femininePast: Word('задраивала', 4),
  neuterPast: Word('задраивало', 4),
  pluralPast: Word('задраивали', 4),
  imperativeInformal: Word('задраивай', 4),
  imperativeFormal: Word('задраивайте', 4),
  imperfect: [],
};

perfectVerbs.set(задраивать.name.text, задраивать);

export { задраивать };