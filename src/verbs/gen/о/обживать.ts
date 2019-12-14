import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обживать: PerfectVerb = {
  name: Word('обживать', 5),
  singular1stPerson: Word('обживаю', 5),
  singular2ndPerson: Word('обживаешь', 5),
  singular3rdPerson: Word('обживает', 5),
  plural1stPerson: Word('обживаем', 5),
  plural2ndPerson: Word('обживаете', 5),
  plural3rdPerson: Word('обживают', 5),
  masculinePast: Word('обживал', 5),
  femininePast: Word('обживала', 5),
  neuterPast: Word('обживало', 5),
  pluralPast: Word('обживали', 5),
  imperativeInformal: Word('обживай', 5),
  imperativeFormal: Word('обживайте', 5),
  imperfect: [],
};

perfectVerbs.set(обживать.name.text, обживать);

export { обживать };