import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обездоливать: PerfectVerb = {
  name: Word('обездоливать', 5),
  singular1stPerson: Word('обездоливаю', 5),
  singular2ndPerson: Word('обездоливаешь', 5),
  singular3rdPerson: Word('обездоливает', 5),
  plural1stPerson: Word('обездоливаем', 5),
  plural2ndPerson: Word('обездоливаете', 5),
  plural3rdPerson: Word('обездоливают', 5),
  masculinePast: Word('обездоливал', 5),
  femininePast: Word('обездоливала', 5),
  neuterPast: Word('обездоливало', 5),
  pluralPast: Word('обездоливали', 5),
  imperativeInformal: Word('обездоливай', 5),
  imperativeFormal: Word('обездоливайте', 5),
  imperfect: [],
};

perfectVerbs.set(обездоливать.name.text, обездоливать);

export { обездоливать };