import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезвреживать: PerfectVerb = {
  name: Word('обезвреживать', 6),
  singular1stPerson: Word('обезвреживаю', 6),
  singular2ndPerson: Word('обезвреживаешь', 6),
  singular3rdPerson: Word('обезвреживает', 6),
  plural1stPerson: Word('обезвреживаем', 6),
  plural2ndPerson: Word('обезвреживаете', 6),
  plural3rdPerson: Word('обезвреживают', 6),
  masculinePast: Word('обезвреживал', 6),
  femininePast: Word('обезвреживала', 6),
  neuterPast: Word('обезвреживало', 6),
  pluralPast: Word('обезвреживали', 6),
  imperativeInformal: Word('обезвреживай', 6),
  imperativeFormal: Word('обезвреживайте', 6),
  imperfect: [],
};

perfectVerbs.set(обезвреживать.name.text, обезвреживать);

export { обезвреживать };