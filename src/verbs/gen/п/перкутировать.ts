import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перкутировать: PerfectVerb = {
  name: Word('перкутировать', 6),
  singular1stPerson: Word('перкутирую', 6),
  singular2ndPerson: Word('перкутируешь', 6),
  singular3rdPerson: Word('перкутирует', 6),
  plural1stPerson: Word('перкутируем', 6),
  plural2ndPerson: Word('перкутируете', 6),
  plural3rdPerson: Word('перкутируют', 6),
  masculinePast: Word('перкутировал', 6),
  femininePast: Word('перкутировала', 6),
  neuterPast: Word('перкутировало', 6),
  pluralPast: Word('перкутировали', 6),
  imperativeInformal: Word('перкутируй', 6),
  imperativeFormal: Word('перкутируйте', 6),
  imperfect: [],
};

perfectVerbs.set(перкутировать.name.text, перкутировать);

export { перкутировать };