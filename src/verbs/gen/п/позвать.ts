import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позвать: PerfectVerb = {
  name: Word('позвать', 4),
  singular1stPerson: Word('позову', 5),
  singular2ndPerson: Word('позовёшь', 1),
  singular3rdPerson: Word('позовёт', 1),
  plural1stPerson: Word('позовём', 1),
  plural2ndPerson: Word('позовёте', 7),
  plural3rdPerson: Word('позовут', 5),
  masculinePast: Word('позвал', 4),
  femininePast: Word('позвала', 4),
  neuterPast: Word('позвало', 4),
  pluralPast: Word('позвали', 4),
  imperativeInformal: Word('позови', 5),
  imperativeFormal: Word('позовите', 5),
  imperfect: ['звать'],
};

perfectVerbs.set(позвать.name.text, позвать);

export { позвать };