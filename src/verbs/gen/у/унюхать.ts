import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const унюхать: PerfectVerb = {
  name: Word('унюхать', 2),
  singular1stPerson: Word('унюхаю', 2),
  singular2ndPerson: Word('унюхаешь', 2),
  singular3rdPerson: Word('унюхает', 2),
  plural1stPerson: Word('унюхаем', 2),
  plural2ndPerson: Word('унюхаете', 2),
  plural3rdPerson: Word('унюхают', 2),
  masculinePast: Word('унюхал', 2),
  femininePast: Word('унюхала', 2),
  neuterPast: Word('унюхало', 2),
  pluralPast: Word('унюхали', 2),
  imperativeInformal: Word('унюхай', 2),
  imperativeFormal: Word('унюхайте', 2),
  imperfect: [],
};

perfectVerbs.set(унюхать.name.text, унюхать);

export { унюхать };