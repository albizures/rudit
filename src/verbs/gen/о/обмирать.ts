import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмирать: PerfectVerb = {
  name: Word('обмирать', 5),
  singular1stPerson: Word('обмираю', 5),
  singular2ndPerson: Word('обмираешь', 5),
  singular3rdPerson: Word('обмирает', 5),
  plural1stPerson: Word('обмираем', 5),
  plural2ndPerson: Word('обмираете', 5),
  plural3rdPerson: Word('обмирают', 5),
  masculinePast: Word('обмирал', 5),
  femininePast: Word('обмирала', 5),
  neuterPast: Word('обмирало', 5),
  pluralPast: Word('обмирали', 5),
  imperativeInformal: Word('обмирай', 5),
  imperativeFormal: Word('обмирайте', 5),
  imperfect: [],
};

perfectVerbs.set(обмирать.name.text, обмирать);

export { обмирать };