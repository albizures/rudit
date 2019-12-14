import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размотать: PerfectVerb = {
  name: Word('размотать', 6),
  singular1stPerson: Word('размотаю', 6),
  singular2ndPerson: Word('размотаешь', 6),
  singular3rdPerson: Word('размотает', 6),
  plural1stPerson: Word('размотаем', 6),
  plural2ndPerson: Word('размотаете', 6),
  plural3rdPerson: Word('размотают', 6),
  masculinePast: Word('размотал', 6),
  femininePast: Word('размотала', 6),
  neuterPast: Word('размотало', 6),
  pluralPast: Word('размотали', 6),
  imperativeInformal: Word('размотай', 6),
  imperativeFormal: Word('размотайте', 6),
  imperfect: [],
};

perfectVerbs.set(размотать.name.text, размотать);

export { размотать };