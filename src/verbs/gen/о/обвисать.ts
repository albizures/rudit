import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвисать: PerfectVerb = {
  name: Word('обвисать', 5),
  singular1stPerson: Word('обвисаю', 5),
  singular2ndPerson: Word('обвисаешь', 5),
  singular3rdPerson: Word('обвисает', 5),
  plural1stPerson: Word('обвисаем', 5),
  plural2ndPerson: Word('обвисаете', 5),
  plural3rdPerson: Word('обвисают', 5),
  masculinePast: Word('обвисал', 5),
  femininePast: Word('обвисала', 5),
  neuterPast: Word('обвисало', 5),
  pluralPast: Word('обвисали', 5),
  imperativeInformal: Word('обвисай', 5),
  imperativeFormal: Word('обвисайте', 5),
  imperfect: [],
};

perfectVerbs.set(обвисать.name.text, обвисать);

export { обвисать };