import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const демаскировать: PerfectVerb = {
  name: Word('демаскировать', 6),
  singular1stPerson: Word('демаскирую', 6),
  singular2ndPerson: Word('демаскируешь', 6),
  singular3rdPerson: Word('демаскирует', 6),
  plural1stPerson: Word('демаскируем', 6),
  plural2ndPerson: Word('демаскируете', 6),
  plural3rdPerson: Word('демаскируют', 6),
  masculinePast: Word('демаскировал', 6),
  femininePast: Word('демаскировала', 6),
  neuterPast: Word('демаскировало', 6),
  pluralPast: Word('демаскировали', 6),
  imperativeInformal: Word('демаскируй', 6),
  imperativeFormal: Word('демаскируйте', 6),
  imperfect: [],
};

perfectVerbs.set(демаскировать.name.text, демаскировать);

export { демаскировать };