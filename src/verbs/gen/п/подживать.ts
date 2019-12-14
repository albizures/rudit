import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подживать: PerfectVerb = {
  name: Word('подживать', 6),
  singular1stPerson: Word('подживаю', 6),
  singular2ndPerson: Word('подживаешь', 6),
  singular3rdPerson: Word('подживает', 6),
  plural1stPerson: Word('подживаем', 6),
  plural2ndPerson: Word('подживаете', 6),
  plural3rdPerson: Word('подживают', 6),
  masculinePast: Word('подживал', 6),
  femininePast: Word('подживала', 6),
  neuterPast: Word('подживало', 6),
  pluralPast: Word('подживали', 6),
  imperativeInformal: Word('подживай', 6),
  imperativeFormal: Word('подживайте', 6),
  imperfect: [],
};

perfectVerbs.set(подживать.name.text, подживать);

export { подживать };