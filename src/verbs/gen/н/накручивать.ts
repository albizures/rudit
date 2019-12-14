import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накручивать: PerfectVerb = {
  name: Word('накручивать', 4),
  singular1stPerson: Word('накручиваю', 4),
  singular2ndPerson: Word('накручиваешь', 4),
  singular3rdPerson: Word('накручивает', 4),
  plural1stPerson: Word('накручиваем', 4),
  plural2ndPerson: Word('накручиваете', 4),
  plural3rdPerson: Word('накручивают', 4),
  masculinePast: Word('накручивал', 4),
  femininePast: Word('накручивала', 4),
  neuterPast: Word('накручивало', 4),
  pluralPast: Word('накручивали', 4),
  imperativeInformal: Word('накручивай', 4),
  imperativeFormal: Word('накручивайте', 4),
  imperfect: [],
};

perfectVerbs.set(накручивать.name.text, накручивать);

export { накручивать };