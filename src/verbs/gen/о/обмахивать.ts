import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмахивать: PerfectVerb = {
  name: Word('обмахивать', 3),
  singular1stPerson: Word('обмахиваю', 3),
  singular2ndPerson: Word('обмахиваешь', 3),
  singular3rdPerson: Word('обмахивает', 3),
  plural1stPerson: Word('обмахиваем', 3),
  plural2ndPerson: Word('обмахиваете', 3),
  plural3rdPerson: Word('обмахивают', 3),
  masculinePast: Word('обмахивал', 3),
  femininePast: Word('обмахивала', 3),
  neuterPast: Word('обмахивало', 3),
  pluralPast: Word('обмахивали', 3),
  imperativeInformal: Word('обмахивай', 3),
  imperativeFormal: Word('обмахивайте', 3),
  imperfect: [],
};

perfectVerbs.set(обмахивать.name.text, обмахивать);

export { обмахивать };