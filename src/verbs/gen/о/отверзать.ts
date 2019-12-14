import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отверзать: PerfectVerb = {
  name: Word('отверзать', 6),
  singular1stPerson: Word('отверзаю', 6),
  singular2ndPerson: Word('отверзаешь', 6),
  singular3rdPerson: Word('отверзает', 6),
  plural1stPerson: Word('отверзаем', 6),
  plural2ndPerson: Word('отверзаете', 6),
  plural3rdPerson: Word('отверзают', 6),
  masculinePast: Word('отверзал', 6),
  femininePast: Word('отверзала', 6),
  neuterPast: Word('отверзало', 6),
  pluralPast: Word('отверзали', 6),
  imperativeInformal: Word('отверзай', 6),
  imperativeFormal: Word('отверзайте', 6),
  imperfect: [],
};

perfectVerbs.set(отверзать.name.text, отверзать);

export { отверзать };