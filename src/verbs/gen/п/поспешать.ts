import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поспешать: PerfectVerb = {
  name: Word('поспешать', 6),
  singular1stPerson: Word('поспешаю', 6),
  singular2ndPerson: Word('поспешаешь', 6),
  singular3rdPerson: Word('поспешает', 6),
  plural1stPerson: Word('поспешаем', 6),
  plural2ndPerson: Word('поспешаете', 6),
  plural3rdPerson: Word('поспешают', 6),
  masculinePast: Word('поспешал', 6),
  femininePast: Word('поспешала', 6),
  neuterPast: Word('поспешало', 6),
  pluralPast: Word('поспешали', 6),
  imperativeInformal: Word('поспешай', 6),
  imperativeFormal: Word('поспешайте', 6),
  imperfect: [],
};

perfectVerbs.set(поспешать.name.text, поспешать);

export { поспешать };