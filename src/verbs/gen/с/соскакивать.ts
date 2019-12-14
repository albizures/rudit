import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соскакивать: PerfectVerb = {
  name: Word('соскакивать', 4),
  singular1stPerson: Word('соскакиваю', 4),
  singular2ndPerson: Word('соскакиваешь', 4),
  singular3rdPerson: Word('соскакивает', 4),
  plural1stPerson: Word('соскакиваем', 4),
  plural2ndPerson: Word('соскакиваете', 4),
  plural3rdPerson: Word('соскакивают', 4),
  masculinePast: Word('соскакивал', 4),
  femininePast: Word('соскакивала', 4),
  neuterPast: Word('соскакивало', 4),
  pluralPast: Word('соскакивали', 4),
  imperativeInformal: Word('соскакивай', 4),
  imperativeFormal: Word('соскакивайте', 4),
  imperfect: [],
};

perfectVerbs.set(соскакивать.name.text, соскакивать);

export { соскакивать };