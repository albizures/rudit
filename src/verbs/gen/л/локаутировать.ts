import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const локаутировать: PerfectVerb = {
  name: Word('локаутировать', 6),
  singular1stPerson: Word('локаутирую', 6),
  singular2ndPerson: Word('локаутируешь', 6),
  singular3rdPerson: Word('локаутирует', 6),
  plural1stPerson: Word('локаутируем', 6),
  plural2ndPerson: Word('локаутируете', 6),
  plural3rdPerson: Word('локаутируют', 6),
  masculinePast: Word('локаутировал', 6),
  femininePast: Word('локаутировала', 6),
  neuterPast: Word('локаутировало', 6),
  pluralPast: Word('локаутировали', 6),
  imperativeInformal: Word('локаутируй', 6),
  imperativeFormal: Word('локаутируйте', 6),
  imperfect: [],
};

perfectVerbs.set(локаутировать.name.text, локаутировать);

export { локаутировать };