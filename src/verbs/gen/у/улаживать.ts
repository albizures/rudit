import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улаживать: PerfectVerb = {
  name: Word('улаживать', 2),
  singular1stPerson: Word('улаживаю', 2),
  singular2ndPerson: Word('улаживаешь', 2),
  singular3rdPerson: Word('улаживает', 2),
  plural1stPerson: Word('улаживаем', 2),
  plural2ndPerson: Word('улаживаете', 2),
  plural3rdPerson: Word('улаживают', 2),
  masculinePast: Word('улаживал', 2),
  femininePast: Word('улаживала', 2),
  neuterPast: Word('улаживало', 2),
  pluralPast: Word('улаживали', 2),
  imperativeInformal: Word('улаживай', 2),
  imperativeFormal: Word('улаживайте', 2),
  imperfect: [],
};

perfectVerbs.set(улаживать.name.text, улаживать);

export { улаживать };