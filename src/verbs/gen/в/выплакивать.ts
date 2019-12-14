import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплакивать: PerfectVerb = {
  name: Word('выплакивать', 4),
  singular1stPerson: Word('выплакиваю', 4),
  singular2ndPerson: Word('выплакиваешь', 4),
  singular3rdPerson: Word('выплакивает', 4),
  plural1stPerson: Word('выплакиваем', 4),
  plural2ndPerson: Word('выплакиваете', 4),
  plural3rdPerson: Word('выплакивают', 4),
  masculinePast: Word('выплакивал', 4),
  femininePast: Word('выплакивала', 4),
  neuterPast: Word('выплакивало', 4),
  pluralPast: Word('выплакивали', 4),
  imperativeInformal: Word('выплакивай', 4),
  imperativeFormal: Word('выплакивайте', 4),
  imperfect: [],
};

perfectVerbs.set(выплакивать.name.text, выплакивать);

export { выплакивать };