import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const читать: PerfectVerb = {
  name: Word('читать', 3),
  singular1stPerson: Word('читаю', 3),
  singular2ndPerson: Word('читаешь', 3),
  singular3rdPerson: Word('читает', 3),
  plural1stPerson: Word('читаем', 3),
  plural2ndPerson: Word('читаете', 3),
  plural3rdPerson: Word('читают', 3),
  masculinePast: Word('читал', 3),
  femininePast: Word('читала', 3),
  neuterPast: Word('читало', 3),
  pluralPast: Word('читали', 3),
  imperativeInformal: Word('читай', 3),
  imperativeFormal: Word('читайте', 3),
  imperfect: ['прочитать','прочесть'],
};

perfectVerbs.set(читать.name.text, читать);

export { читать };