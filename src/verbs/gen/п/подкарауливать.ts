import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкарауливать: PerfectVerb = {
  name: Word('подкарауливать', 7),
  singular1stPerson: Word('подкарауливаю', 7),
  singular2ndPerson: Word('подкарауливаешь', 7),
  singular3rdPerson: Word('подкарауливает', 7),
  plural1stPerson: Word('подкарауливаем', 7),
  plural2ndPerson: Word('подкарауливаете', 7),
  plural3rdPerson: Word('подкарауливают', 7),
  masculinePast: Word('подкарауливал', 7),
  femininePast: Word('подкарауливала', 7),
  neuterPast: Word('подкарауливало', 7),
  pluralPast: Word('подкарауливали', 7),
  imperativeInformal: Word('подкарауливай', 7),
  imperativeFormal: Word('подкарауливайте', 7),
  imperfect: [],
};

perfectVerbs.set(подкарауливать.name.text, подкарауливать);

export { подкарауливать };