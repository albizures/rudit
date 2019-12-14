import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размешать: PerfectVerb = {
  name: Word('размешать', 6),
  singular1stPerson: Word('размешаю', 6),
  singular2ndPerson: Word('размешаешь', 6),
  singular3rdPerson: Word('размешает', 6),
  plural1stPerson: Word('размешаем', 6),
  plural2ndPerson: Word('размешаете', 6),
  plural3rdPerson: Word('размешают', 6),
  masculinePast: Word('размешал', 6),
  femininePast: Word('размешала', 6),
  neuterPast: Word('размешало', 6),
  pluralPast: Word('размешали', 6),
  imperativeInformal: Word('размешай', 6),
  imperativeFormal: Word('размешайте', 6),
  imperfect: [],
};

perfectVerbs.set(размешать.name.text, размешать);

export { размешать };