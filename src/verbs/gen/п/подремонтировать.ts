import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подремонтировать: PerfectVerb = {
  name: Word('подремонтировать', 9),
  singular1stPerson: Word('подремонтирую', 9),
  singular2ndPerson: Word('подремонтируешь', 9),
  singular3rdPerson: Word('подремонтирует', 9),
  plural1stPerson: Word('подремонтируем', 9),
  plural2ndPerson: Word('подремонтируете', 9),
  plural3rdPerson: Word('подремонтируют', 9),
  masculinePast: Word('подремонтировал', 9),
  femininePast: Word('подремонтировала', 9),
  neuterPast: Word('подремонтировало', 9),
  pluralPast: Word('подремонтировали', 9),
  imperativeInformal: Word('подремонтируй', 9),
  imperativeFormal: Word('подремонтируйте', 9),
  imperfect: [],
};

perfectVerbs.set(подремонтировать.name.text, подремонтировать);

export { подремонтировать };