import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хаживать: PerfectVerb = {
  name: Word('хаживать', 1),
  singular1stPerson: Word('хаживаю', 1),
  singular2ndPerson: Word('хаживаешь', 1),
  singular3rdPerson: Word('хаживает', 1),
  plural1stPerson: Word('хаживаем', 1),
  plural2ndPerson: Word('хаживаете', 1),
  plural3rdPerson: Word('хаживают', 1),
  masculinePast: Word('хаживал', 1),
  femininePast: Word('хаживала', 1),
  neuterPast: Word('хаживало', 1),
  pluralPast: Word('хаживали', 1),
  imperativeInformal: Word('хаживай', 1),
  imperativeFormal: Word('хаживайте', 1),
  imperfect: [],
};

perfectVerbs.set(хаживать.name.text, хаживать);

export { хаживать };