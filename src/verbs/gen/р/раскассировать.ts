import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскассировать: PerfectVerb = {
  name: Word('раскассировать', 7),
  singular1stPerson: Word('раскассирую', 7),
  singular2ndPerson: Word('раскассируешь', 7),
  singular3rdPerson: Word('раскассирует', 7),
  plural1stPerson: Word('раскассируем', 7),
  plural2ndPerson: Word('раскассируете', 7),
  plural3rdPerson: Word('раскассируют', 7),
  masculinePast: Word('раскассировал', 7),
  femininePast: Word('раскассировала', 7),
  neuterPast: Word('раскассировало', 7),
  pluralPast: Word('раскассировали', 7),
  imperativeInformal: Word('раскассируй', 7),
  imperativeFormal: Word('раскассируйте', 7),
  imperfect: [],
};

perfectVerbs.set(раскассировать.name.text, раскассировать);

export { раскассировать };