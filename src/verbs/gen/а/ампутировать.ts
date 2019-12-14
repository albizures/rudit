import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ампутировать: PerfectVerb = {
  name: Word('ампутировать', 5),
  singular1stPerson: Word('ампутирую', 5),
  singular2ndPerson: Word('ампутируешь', 5),
  singular3rdPerson: Word('ампутирует', 5),
  plural1stPerson: Word('ампутируем', 5),
  plural2ndPerson: Word('ампутируете', 5),
  plural3rdPerson: Word('ампутируют', 5),
  masculinePast: Word('ампутировал', 5),
  femininePast: Word('ампутировала', 5),
  neuterPast: Word('ампутировало', 5),
  pluralPast: Word('ампутировали', 5),
  imperativeInformal: Word('ампутируй', 5),
  imperativeFormal: Word('ампутируйте', 5),
  imperfect: [],
};

perfectVerbs.set(ампутировать.name.text, ампутировать);

export { ампутировать };