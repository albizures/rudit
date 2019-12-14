import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const калькировать: PerfectVerb = {
  name: Word('калькировать', 5),
  singular1stPerson: Word('калькирую', 5),
  singular2ndPerson: Word('калькируешь', 5),
  singular3rdPerson: Word('калькирует', 5),
  plural1stPerson: Word('калькируем', 5),
  plural2ndPerson: Word('калькируете', 5),
  plural3rdPerson: Word('калькируют', 5),
  masculinePast: Word('калькировал', 5),
  femininePast: Word('калькировала', 5),
  neuterPast: Word('калькировало', 5),
  pluralPast: Word('калькировали', 5),
  imperativeInformal: Word('калькируй', 5),
  imperativeFormal: Word('калькируйте', 5),
  imperfect: [],
};

perfectVerbs.set(калькировать.name.text, калькировать);

export { калькировать };