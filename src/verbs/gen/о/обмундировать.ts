import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмундировать: PerfectVerb = {
  name: Word('обмундировать', 10),
  singular1stPerson: Word('обмундирую', 8),
  singular2ndPerson: Word('обмундируешь', 8),
  singular3rdPerson: Word('обмундирует', 8),
  plural1stPerson: Word('обмундируем', 8),
  plural2ndPerson: Word('обмундируете', 8),
  plural3rdPerson: Word('обмундируют', 8),
  masculinePast: Word('обмундировал', 10),
  femininePast: Word('обмундировала', 10),
  neuterPast: Word('обмундировало', 10),
  pluralPast: Word('обмундировали', 10),
  imperativeInformal: Word('обмундируй', 8),
  imperativeFormal: Word('обмундируйте', 8),
  imperfect: [],
};

perfectVerbs.set(обмундировать.name.text, обмундировать);

export { обмундировать };