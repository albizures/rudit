import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подытоживать: PerfectVerb = {
  name: Word('подытоживать', 5),
  singular1stPerson: Word('подытоживаю', 5),
  singular2ndPerson: Word('подытоживаешь', 5),
  singular3rdPerson: Word('подытоживает', 5),
  plural1stPerson: Word('подытоживаем', 5),
  plural2ndPerson: Word('подытоживаете', 5),
  plural3rdPerson: Word('подытоживают', 5),
  masculinePast: Word('подытоживал', 5),
  femininePast: Word('подытоживала', 5),
  neuterPast: Word('подытоживало', 5),
  pluralPast: Word('подытоживали', 5),
  imperativeInformal: Word('подытоживай', 5),
  imperativeFormal: Word('подытоживайте', 5),
  imperfect: [],
};

perfectVerbs.set(подытоживать.name.text, подытоживать);

export { подытоживать };