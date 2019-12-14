import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обивать: PerfectVerb = {
  name: Word('обивать', 4),
  singular1stPerson: Word('обиваю', 4),
  singular2ndPerson: Word('обиваешь', 4),
  singular3rdPerson: Word('обивает', 4),
  plural1stPerson: Word('обиваем', 4),
  plural2ndPerson: Word('обиваете', 4),
  plural3rdPerson: Word('обивают', 4),
  masculinePast: Word('обивал', 4),
  femininePast: Word('обивала', 4),
  neuterPast: Word('обивало', 4),
  pluralPast: Word('обивали', 4),
  imperativeInformal: Word('обивай', 4),
  imperativeFormal: Word('обивайте', 4),
  imperfect: [],
};

perfectVerbs.set(обивать.name.text, обивать);

export { обивать };