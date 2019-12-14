import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размораживать: PerfectVerb = {
  name: Word('размораживать', 6),
  singular1stPerson: Word('размораживаю', 6),
  singular2ndPerson: Word('размораживаешь', 6),
  singular3rdPerson: Word('размораживает', 6),
  plural1stPerson: Word('размораживаем', 6),
  plural2ndPerson: Word('размораживаете', 6),
  plural3rdPerson: Word('размораживают', 6),
  masculinePast: Word('размораживал', 6),
  femininePast: Word('размораживала', 6),
  neuterPast: Word('размораживало', 6),
  pluralPast: Word('размораживали', 6),
  imperativeInformal: Word('размораживай', 6),
  imperativeFormal: Word('размораживайте', 6),
  imperfect: [],
};

perfectVerbs.set(размораживать.name.text, размораживать);

export { размораживать };