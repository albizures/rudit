import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезвоживать: PerfectVerb = {
  name: Word('обезвоживать', 5),
  singular1stPerson: Word('обезвоживаю', 5),
  singular2ndPerson: Word('обезвоживаешь', 5),
  singular3rdPerson: Word('обезвоживает', 5),
  plural1stPerson: Word('обезвоживаем', 5),
  plural2ndPerson: Word('обезвоживаете', 5),
  plural3rdPerson: Word('обезвоживают', 5),
  masculinePast: Word('обезвоживал', 5),
  femininePast: Word('обезвоживала', 5),
  neuterPast: Word('обезвоживало', 5),
  pluralPast: Word('обезвоживали', 5),
  imperativeInformal: Word('обезвоживай', 5),
  imperativeFormal: Word('обезвоживайте', 5),
  imperfect: [],
};

perfectVerbs.set(обезвоживать.name.text, обезвоживать);

export { обезвоживать };