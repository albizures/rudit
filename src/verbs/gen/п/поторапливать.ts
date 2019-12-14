import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поторапливать: PerfectVerb = {
  name: Word('поторапливать', 5),
  singular1stPerson: Word('поторапливаю', 5),
  singular2ndPerson: Word('поторапливаешь', 5),
  singular3rdPerson: Word('поторапливает', 5),
  plural1stPerson: Word('поторапливаем', 5),
  plural2ndPerson: Word('поторапливаете', 5),
  plural3rdPerson: Word('поторапливают', 5),
  masculinePast: Word('поторапливал', 5),
  femininePast: Word('поторапливала', 5),
  neuterPast: Word('поторапливало', 5),
  pluralPast: Word('поторапливали', 5),
  imperativeInformal: Word('поторапливай', 5),
  imperativeFormal: Word('поторапливайте', 5),
  imperfect: [],
};

perfectVerbs.set(поторапливать.name.text, поторапливать);

export { поторапливать };