import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размечать: PerfectVerb = {
  name: Word('размечать', 6),
  singular1stPerson: Word('размечаю', 6),
  singular2ndPerson: Word('размечаешь', 6),
  singular3rdPerson: Word('размечает', 6),
  plural1stPerson: Word('размечаем', 6),
  plural2ndPerson: Word('размечаете', 6),
  plural3rdPerson: Word('размечают', 6),
  masculinePast: Word('размечал', 6),
  femininePast: Word('размечала', 6),
  neuterPast: Word('размечало', 6),
  pluralPast: Word('размечали', 6),
  imperativeInformal: Word('размечай', 6),
  imperativeFormal: Word('размечайте', 6),
  imperfect: [],
};

perfectVerbs.set(размечать.name.text, размечать);

export { размечать };