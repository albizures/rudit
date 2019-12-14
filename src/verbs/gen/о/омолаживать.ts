import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const омолаживать: PerfectVerb = {
  name: Word('омолаживать', 4),
  singular1stPerson: Word('омолаживаю', 4),
  singular2ndPerson: Word('омолаживаешь', 4),
  singular3rdPerson: Word('омолаживает', 4),
  plural1stPerson: Word('омолаживаем', 4),
  plural2ndPerson: Word('омолаживаете', 4),
  plural3rdPerson: Word('омолаживают', 4),
  masculinePast: Word('омолаживал', 4),
  femininePast: Word('омолаживала', 4),
  neuterPast: Word('омолаживало', 4),
  pluralPast: Word('омолаживали', 4),
  imperativeInformal: Word('омолаживай', 4),
  imperativeFormal: Word('омолаживайте', 4),
  imperfect: [],
};

perfectVerbs.set(омолаживать.name.text, омолаживать);

export { омолаживать };