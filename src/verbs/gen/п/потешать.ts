import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потешать: PerfectVerb = {
  name: Word('потешать', 5),
  singular1stPerson: Word('потешаю', 5),
  singular2ndPerson: Word('потешаешь', 5),
  singular3rdPerson: Word('потешает', 5),
  plural1stPerson: Word('потешаем', 5),
  plural2ndPerson: Word('потешаете', 5),
  plural3rdPerson: Word('потешают', 5),
  masculinePast: Word('потешал', 5),
  femininePast: Word('потешала', 5),
  neuterPast: Word('потешало', 5),
  pluralPast: Word('потешали', 5),
  imperativeInformal: Word('потешай', 5),
  imperativeFormal: Word('потешайте', 5),
  imperfect: [],
};

perfectVerbs.set(потешать.name.text, потешать);

export { потешать };