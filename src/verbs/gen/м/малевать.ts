import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const малевать: PerfectVerb = {
  name: Word('малевать', 5),
  singular1stPerson: Word('малюю', 3),
  singular2ndPerson: Word('малюешь', 3),
  singular3rdPerson: Word('малюет', 3),
  plural1stPerson: Word('малюем', 3),
  plural2ndPerson: Word('малюете', 3),
  plural3rdPerson: Word('малюют', 3),
  masculinePast: Word('малевал', 5),
  femininePast: Word('малевала', 5),
  neuterPast: Word('малевало', 5),
  pluralPast: Word('малевали', 5),
  imperativeInformal: Word('малюй', 3),
  imperativeFormal: Word('малюйте', 3),
  imperfect: [],
};

perfectVerbs.set(малевать.name.text, малевать);

export { малевать };