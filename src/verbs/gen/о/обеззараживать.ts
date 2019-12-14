import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обеззараживать: PerfectVerb = {
  name: Word('обеззараживать', 7),
  singular1stPerson: Word('обеззараживаю', 7),
  singular2ndPerson: Word('обеззараживаешь', 7),
  singular3rdPerson: Word('обеззараживает', 7),
  plural1stPerson: Word('обеззараживаем', 7),
  plural2ndPerson: Word('обеззараживаете', 7),
  plural3rdPerson: Word('обеззараживают', 7),
  masculinePast: Word('обеззараживал', 7),
  femininePast: Word('обеззараживала', 7),
  neuterPast: Word('обеззараживало', 7),
  pluralPast: Word('обеззараживали', 7),
  imperativeInformal: Word('обеззараживай', 7),
  imperativeFormal: Word('обеззараживайте', 7),
  imperfect: [],
};

perfectVerbs.set(обеззараживать.name.text, обеззараживать);

export { обеззараживать };