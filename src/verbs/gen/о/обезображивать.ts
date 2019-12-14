import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезображивать: PerfectVerb = {
  name: Word('обезображивать', 7),
  singular1stPerson: Word('обезображиваю', 7),
  singular2ndPerson: Word('обезображиваешь', 7),
  singular3rdPerson: Word('обезображивает', 7),
  plural1stPerson: Word('обезображиваем', 7),
  plural2ndPerson: Word('обезображиваете', 7),
  plural3rdPerson: Word('обезображивают', 7),
  masculinePast: Word('обезображивал', 7),
  femininePast: Word('обезображивала', 7),
  neuterPast: Word('обезображивало', 7),
  pluralPast: Word('обезображивали', 7),
  imperativeInformal: Word('обезображивай', 7),
  imperativeFormal: Word('обезображивайте', 7),
  imperfect: [],
};

perfectVerbs.set(обезображивать.name.text, обезображивать);

export { обезображивать };