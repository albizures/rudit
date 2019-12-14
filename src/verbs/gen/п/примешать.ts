import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примешать: PerfectVerb = {
  name: Word('примешать', 6),
  singular1stPerson: Word('примешаю', 6),
  singular2ndPerson: Word('примешаешь', 6),
  singular3rdPerson: Word('примешает', 6),
  plural1stPerson: Word('примешаем', 6),
  plural2ndPerson: Word('примешаете', 6),
  plural3rdPerson: Word('примешают', 6),
  masculinePast: Word('примешал', 6),
  femininePast: Word('примешала', 6),
  neuterPast: Word('примешало', 6),
  pluralPast: Word('примешали', 6),
  imperativeInformal: Word('примешай', 6),
  imperativeFormal: Word('примешайте', 6),
  imperfect: [],
};

perfectVerbs.set(примешать.name.text, примешать);

export { примешать };