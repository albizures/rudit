import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнюхать: PerfectVerb = {
  name: Word('обнюхать', 3),
  singular1stPerson: Word('обнюхаю', 3),
  singular2ndPerson: Word('обнюхаешь', 3),
  singular3rdPerson: Word('обнюхает', 3),
  plural1stPerson: Word('обнюхаем', 3),
  plural2ndPerson: Word('обнюхаете', 3),
  plural3rdPerson: Word('обнюхают', 3),
  masculinePast: Word('обнюхал', 3),
  femininePast: Word('обнюхала', 3),
  neuterPast: Word('обнюхало', 3),
  pluralPast: Word('обнюхали', 3),
  imperativeInformal: Word('обнюхай', 3),
  imperativeFormal: Word('обнюхайте', 3),
  imperfect: [],
};

perfectVerbs.set(обнюхать.name.text, обнюхать);

export { обнюхать };