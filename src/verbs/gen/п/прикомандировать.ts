import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикомандировать: PerfectVerb = {
  name: Word('прикомандировать', 13),
  singular1stPerson: Word('прикомандирую', 11),
  singular2ndPerson: Word('прикомандируешь', 11),
  singular3rdPerson: Word('прикомандирует', 11),
  plural1stPerson: Word('прикомандируем', 11),
  plural2ndPerson: Word('прикомандируете', 11),
  plural3rdPerson: Word('прикомандируют', 11),
  masculinePast: Word('прикомандировал', 13),
  femininePast: Word('прикомандировала', 13),
  neuterPast: Word('прикомандировало', 13),
  pluralPast: Word('прикомандировали', 13),
  imperativeInformal: Word('прикомандируй', 11),
  imperativeFormal: Word('прикомандируйте', 11),
  imperfect: [],
};

perfectVerbs.set(прикомандировать.name.text, прикомандировать);

export { прикомандировать };