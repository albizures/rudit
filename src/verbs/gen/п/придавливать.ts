import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const придавливать: PerfectVerb = {
  name: Word('придавливать', 4),
  singular1stPerson: Word('придавливаю', 4),
  singular2ndPerson: Word('придавливаешь', 4),
  singular3rdPerson: Word('придавливает', 4),
  plural1stPerson: Word('придавливаем', 4),
  plural2ndPerson: Word('придавливаете', 4),
  plural3rdPerson: Word('придавливают', 4),
  masculinePast: Word('придавливал', 4),
  femininePast: Word('придавливала', 4),
  neuterPast: Word('придавливало', 4),
  pluralPast: Word('придавливали', 4),
  imperativeInformal: Word('придавливай', 4),
  imperativeFormal: Word('придавливайте', 4),
  imperfect: [],
};

perfectVerbs.set(придавливать.name.text, придавливать);

export { придавливать };