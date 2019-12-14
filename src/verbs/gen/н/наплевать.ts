import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наплевать: PerfectVerb = {
  name: Word('наплевать', 6),
  singular1stPerson: Word('наплюю', 5),
  singular2ndPerson: Word('наплюёшь', 1),
  singular3rdPerson: Word('наплюёт', 1),
  plural1stPerson: Word('наплюём', 1),
  plural2ndPerson: Word('наплюёте', 1),
  plural3rdPerson: Word('наплюют', 5),
  masculinePast: Word('наплевал', 6),
  femininePast: Word('наплевала', 6),
  neuterPast: Word('наплевало', 6),
  pluralPast: Word('наплевали', 6),
  imperativeInformal: Word('наплюй', 4),
  imperativeFormal: Word('наплюйте', 4),
  imperfect: [],
};

perfectVerbs.set(наплевать.name.text, наплевать);

export { наплевать };