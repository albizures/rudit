import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соскабливать: PerfectVerb = {
  name: Word('соскабливать', 4),
  singular1stPerson: Word('соскабливаю', 4),
  singular2ndPerson: Word('соскабливаешь', 4),
  singular3rdPerson: Word('соскабливает', 4),
  plural1stPerson: Word('соскабливаем', 4),
  plural2ndPerson: Word('соскабливаете', 4),
  plural3rdPerson: Word('соскабливают', 4),
  masculinePast: Word('соскабливал', 4),
  femininePast: Word('соскабливала', 4),
  neuterPast: Word('соскабливало', 4),
  pluralPast: Word('соскабливали', 4),
  imperativeInformal: Word('соскабливай', 4),
  imperativeFormal: Word('соскабливайте', 4),
  imperfect: [],
};

perfectVerbs.set(соскабливать.name.text, соскабливать);

export { соскабливать };