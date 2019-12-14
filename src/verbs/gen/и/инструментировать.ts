import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const инструментировать: PerfectVerb = {
  name: Word('инструментировать', 10),
  singular1stPerson: Word('инструментирую', 10),
  singular2ndPerson: Word('инструментируешь', 10),
  singular3rdPerson: Word('инструментирует', 10),
  plural1stPerson: Word('инструментируем', 10),
  plural2ndPerson: Word('инструментируете', 10),
  plural3rdPerson: Word('инструментируют', 10),
  masculinePast: Word('инструментировал', 10),
  femininePast: Word('инструментировала', 10),
  neuterPast: Word('инструментировало', 10),
  pluralPast: Word('инструментировали', 10),
  imperativeInformal: Word('инструментируй', 10),
  imperativeFormal: Word('инструментируйте', 10),
  imperfect: [],
};

perfectVerbs.set(инструментировать.name.text, инструментировать);

export { инструментировать };