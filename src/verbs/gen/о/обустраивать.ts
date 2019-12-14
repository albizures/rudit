import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обустраивать: PerfectVerb = {
  name: Word('обустраивать', 6),
  singular1stPerson: Word('обустраиваю', 6),
  singular2ndPerson: Word('обустраиваешь', 6),
  singular3rdPerson: Word('обустраивает', 6),
  plural1stPerson: Word('обустраиваем', 6),
  plural2ndPerson: Word('обустраиваете', 6),
  plural3rdPerson: Word('обустраивают', 6),
  masculinePast: Word('обустраивал', 6),
  femininePast: Word('обустраивала', 6),
  neuterPast: Word('обустраивало', 6),
  pluralPast: Word('обустраивали', 6),
  imperativeInformal: Word('обустраивай', 6),
  imperativeFormal: Word('обустраивайте', 6),
  imperfect: [],
};

perfectVerbs.set(обустраивать.name.text, обустраивать);

export { обустраивать };