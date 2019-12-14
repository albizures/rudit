import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высверливать: PerfectVerb = {
  name: Word('высверливать', 4),
  singular1stPerson: Word('высверливаю', 4),
  singular2ndPerson: Word('высверливаешь', 4),
  singular3rdPerson: Word('высверливает', 4),
  plural1stPerson: Word('высверливаем', 4),
  plural2ndPerson: Word('высверливаете', 4),
  plural3rdPerson: Word('высверливают', 4),
  masculinePast: Word('высверливал', 4),
  femininePast: Word('высверливала', 4),
  neuterPast: Word('высверливало', 4),
  pluralPast: Word('высверливали', 4),
  imperativeInformal: Word('высверливай', 4),
  imperativeFormal: Word('высверливайте', 4),
  imperfect: [],
};

perfectVerbs.set(высверливать.name.text, высверливать);

export { высверливать };