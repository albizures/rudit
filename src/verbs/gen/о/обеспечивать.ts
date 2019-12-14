import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обеспечивать: PerfectVerb = {
  name: Word('обеспечивать', 5),
  singular1stPerson: Word('обеспечиваю', 5),
  singular2ndPerson: Word('обеспечиваешь', 5),
  singular3rdPerson: Word('обеспечивает', 5),
  plural1stPerson: Word('обеспечиваем', 5),
  plural2ndPerson: Word('обеспечиваете', 5),
  plural3rdPerson: Word('обеспечивают', 5),
  masculinePast: Word('обеспечивал', 5),
  femininePast: Word('обеспечивала', 5),
  neuterPast: Word('обеспечивало', 5),
  pluralPast: Word('обеспечивали', 5),
  imperativeInformal: Word('обеспечивай', 5),
  imperativeFormal: Word('обеспечивайте', 5),
  imperfect: ['обеспечить'],
};

perfectVerbs.set(обеспечивать.name.text, обеспечивать);

export { обеспечивать };