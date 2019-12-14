import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const активировать: PerfectVerb = {
  name: Word('активировать', 5),
  singular1stPerson: Word('активирую', 5),
  singular2ndPerson: Word('активируешь', 5),
  singular3rdPerson: Word('активирует', 5),
  plural1stPerson: Word('активируем', 5),
  plural2ndPerson: Word('активируете', 5),
  plural3rdPerson: Word('активируют', 5),
  masculinePast: Word('активировал', 5),
  femininePast: Word('активировала', 5),
  neuterPast: Word('активировало', 5),
  pluralPast: Word('активировали', 5),
  imperativeInformal: Word('активируй', 5),
  imperativeFormal: Word('активируйте', 5),
  imperfect: [],
};

perfectVerbs.set(активировать.name.text, активировать);

export { активировать };