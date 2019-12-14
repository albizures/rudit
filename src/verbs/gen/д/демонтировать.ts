import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const демонтировать: PerfectVerb = {
  name: Word('демонтировать', 6),
  singular1stPerson: Word('демонтирую', 6),
  singular2ndPerson: Word('демонтируешь', 6),
  singular3rdPerson: Word('демонтирует', 6),
  plural1stPerson: Word('демонтируем', 6),
  plural2ndPerson: Word('демонтируете', 6),
  plural3rdPerson: Word('демонтируют', 6),
  masculinePast: Word('демонтировал', 6),
  femininePast: Word('демонтировала', 6),
  neuterPast: Word('демонтировало', 6),
  pluralPast: Word('демонтировали', 6),
  imperativeInformal: Word('демонтируй', 6),
  imperativeFormal: Word('демонтируйте', 6),
  imperfect: [],
};

perfectVerbs.set(демонтировать.name.text, демонтировать);

export { демонтировать };