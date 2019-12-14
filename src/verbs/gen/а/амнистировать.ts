import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const амнистировать: PerfectVerb = {
  name: Word('амнистировать', 6),
  singular1stPerson: Word('амнистирую', 6),
  singular2ndPerson: Word('амнистируешь', 6),
  singular3rdPerson: Word('амнистирует', 6),
  plural1stPerson: Word('амнистируем', 6),
  plural2ndPerson: Word('амнистируете', 6),
  plural3rdPerson: Word('амнистируют', 6),
  masculinePast: Word('амнистировал', 6),
  femininePast: Word('амнистировала', 6),
  neuterPast: Word('амнистировало', 6),
  pluralPast: Word('амнистировали', 6),
  imperativeInformal: Word('амнистируй', 6),
  imperativeFormal: Word('амнистируйте', 6),
  imperfect: [],
};

perfectVerbs.set(амнистировать.name.text, амнистировать);

export { амнистировать };