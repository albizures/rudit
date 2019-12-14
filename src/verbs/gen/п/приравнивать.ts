import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приравнивать: PerfectVerb = {
  name: Word('приравнивать', 4),
  singular1stPerson: Word('приравниваю', 4),
  singular2ndPerson: Word('приравниваешь', 4),
  singular3rdPerson: Word('приравнивает', 4),
  plural1stPerson: Word('приравниваем', 4),
  plural2ndPerson: Word('приравниваете', 4),
  plural3rdPerson: Word('приравнивают', 4),
  masculinePast: Word('приравнивал', 4),
  femininePast: Word('приравнивала', 4),
  neuterPast: Word('приравнивало', 4),
  pluralPast: Word('приравнивали', 4),
  imperativeInformal: Word('приравнивай', 4),
  imperativeFormal: Word('приравнивайте', 4),
  imperfect: [],
};

perfectVerbs.set(приравнивать.name.text, приравнивать);

export { приравнивать };