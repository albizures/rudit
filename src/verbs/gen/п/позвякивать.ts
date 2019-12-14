import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позвякивать: PerfectVerb = {
  name: Word('позвякивать', 4),
  singular1stPerson: Word('позвякиваю', 4),
  singular2ndPerson: Word('позвякиваешь', 4),
  singular3rdPerson: Word('позвякивает', 4),
  plural1stPerson: Word('позвякиваем', 4),
  plural2ndPerson: Word('позвякиваете', 4),
  plural3rdPerson: Word('позвякивают', 4),
  masculinePast: Word('позвякивал', 4),
  femininePast: Word('позвякивала', 4),
  neuterPast: Word('позвякивало', 4),
  pluralPast: Word('позвякивали', 4),
  imperativeInformal: Word('позвякивай', 4),
  imperativeFormal: Word('позвякивайте', 4),
  imperfect: [],
};

perfectVerbs.set(позвякивать.name.text, позвякивать);

export { позвякивать };