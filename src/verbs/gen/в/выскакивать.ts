import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выскакивать: PerfectVerb = {
  name: Word('выскакивать', 4),
  singular1stPerson: Word('выскакиваю', 4),
  singular2ndPerson: Word('выскакиваешь', 4),
  singular3rdPerson: Word('выскакивает', 4),
  plural1stPerson: Word('выскакиваем', 4),
  plural2ndPerson: Word('выскакиваете', 4),
  plural3rdPerson: Word('выскакивают', 4),
  masculinePast: Word('выскакивал', 4),
  femininePast: Word('выскакивала', 4),
  neuterPast: Word('выскакивало', 4),
  pluralPast: Word('выскакивали', 4),
  imperativeInformal: Word('выскакивай', 4),
  imperativeFormal: Word('выскакивайте', 4),
  imperfect: ['выскочить'],
};

perfectVerbs.set(выскакивать.name.text, выскакивать);

export { выскакивать };