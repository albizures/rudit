import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ремонтировать: PerfectVerb = {
  name: Word('ремонтировать', 6),
  singular1stPerson: Word('ремонтирую', 6),
  singular2ndPerson: Word('ремонтируешь', 6),
  singular3rdPerson: Word('ремонтирует', 6),
  plural1stPerson: Word('ремонтируем', 6),
  plural2ndPerson: Word('ремонтируете', 6),
  plural3rdPerson: Word('ремонтируют', 6),
  masculinePast: Word('ремонтировал', 6),
  femininePast: Word('ремонтировала', 6),
  neuterPast: Word('ремонтировало', 6),
  pluralPast: Word('ремонтировали', 6),
  imperativeInformal: Word('ремонтируй', 6),
  imperativeFormal: Word('ремонтируйте', 6),
  imperfect: ['отремонтировать'],
};

perfectVerbs.set(ремонтировать.name.text, ремонтировать);

export { ремонтировать };