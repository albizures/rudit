import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обхаживать: PerfectVerb = {
  name: Word('обхаживать', 3),
  singular1stPerson: Word('обхаживаю', 3),
  singular2ndPerson: Word('обхаживаешь', 3),
  singular3rdPerson: Word('обхаживает', 3),
  plural1stPerson: Word('обхаживаем', 3),
  plural2ndPerson: Word('обхаживаете', 3),
  plural3rdPerson: Word('обхаживают', 3),
  masculinePast: Word('обхаживал', 3),
  femininePast: Word('обхаживала', 3),
  neuterPast: Word('обхаживало', 3),
  pluralPast: Word('обхаживали', 3),
  imperativeInformal: Word('обхаживай', 3),
  imperativeFormal: Word('обхаживайте', 3),
  imperfect: [],
};

perfectVerbs.set(обхаживать.name.text, обхаживать);

export { обхаживать };