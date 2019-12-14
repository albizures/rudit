import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выхаживать: PerfectVerb = {
  name: Word('выхаживать', 3),
  singular1stPerson: Word('выхаживаю', 3),
  singular2ndPerson: Word('выхаживаешь', 3),
  singular3rdPerson: Word('выхаживает', 3),
  plural1stPerson: Word('выхаживаем', 3),
  plural2ndPerson: Word('выхаживаете', 3),
  plural3rdPerson: Word('выхаживают', 3),
  masculinePast: Word('выхаживал', 3),
  femininePast: Word('выхаживала', 3),
  neuterPast: Word('выхаживало', 3),
  pluralPast: Word('выхаживали', 3),
  imperativeInformal: Word('выхаживай', 3),
  imperativeFormal: Word('выхаживайте', 3),
  imperfect: [],
};

perfectVerbs.set(выхаживать.name.text, выхаживать);

export { выхаживать };