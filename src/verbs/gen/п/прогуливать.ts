import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогуливать: PerfectVerb = {
  name: Word('прогуливать', 4),
  singular1stPerson: Word('прогуливаю', 4),
  singular2ndPerson: Word('прогуливаешь', 4),
  singular3rdPerson: Word('прогуливает', 4),
  plural1stPerson: Word('прогуливаем', 4),
  plural2ndPerson: Word('прогуливаете', 4),
  plural3rdPerson: Word('прогуливают', 4),
  masculinePast: Word('прогуливал', 4),
  femininePast: Word('прогуливала', 4),
  neuterPast: Word('прогуливало', 4),
  pluralPast: Word('прогуливали', 4),
  imperativeInformal: Word('прогуливай', 4),
  imperativeFormal: Word('прогуливайте', 4),
  imperfect: [],
};

perfectVerbs.set(прогуливать.name.text, прогуливать);

export { прогуливать };