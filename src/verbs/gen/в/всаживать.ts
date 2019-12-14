import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всаживать: PerfectVerb = {
  name: Word('всаживать', 2),
  singular1stPerson: Word('всаживаю', 2),
  singular2ndPerson: Word('всаживаешь', 2),
  singular3rdPerson: Word('всаживает', 2),
  plural1stPerson: Word('всаживаем', 2),
  plural2ndPerson: Word('всаживаете', 2),
  plural3rdPerson: Word('всаживают', 2),
  masculinePast: Word('всаживал', 2),
  femininePast: Word('всаживала', 2),
  neuterPast: Word('всаживало', 2),
  pluralPast: Word('всаживали', 2),
  imperativeInformal: Word('всаживай', 2),
  imperativeFormal: Word('всаживайте', 2),
  imperfect: [],
};

perfectVerbs.set(всаживать.name.text, всаживать);

export { всаживать };