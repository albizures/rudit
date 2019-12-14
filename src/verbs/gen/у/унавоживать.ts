import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const унавоживать: PerfectVerb = {
  name: Word('унавоживать', 4),
  singular1stPerson: Word('унавоживаю', 4),
  singular2ndPerson: Word('унавоживаешь', 4),
  singular3rdPerson: Word('унавоживает', 4),
  plural1stPerson: Word('унавоживаем', 4),
  plural2ndPerson: Word('унавоживаете', 4),
  plural3rdPerson: Word('унавоживают', 4),
  masculinePast: Word('унавоживал', 4),
  femininePast: Word('унавоживала', 4),
  neuterPast: Word('унавоживало', 4),
  pluralPast: Word('унавоживали', 4),
  imperativeInformal: Word('унавоживай', 4),
  imperativeFormal: Word('унавоживайте', 4),
  imperfect: [],
};

perfectVerbs.set(унавоживать.name.text, унавоживать);

export { унавоживать };