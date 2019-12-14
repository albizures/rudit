import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обломать: PerfectVerb = {
  name: Word('обломать', 5),
  singular1stPerson: Word('обломаю', 5),
  singular2ndPerson: Word('обломаешь', 5),
  singular3rdPerson: Word('обломает', 5),
  plural1stPerson: Word('обломаем', 5),
  plural2ndPerson: Word('обломаете', 5),
  plural3rdPerson: Word('обломают', 5),
  masculinePast: Word('обломал', 5),
  femininePast: Word('обломала', 5),
  neuterPast: Word('обломало', 5),
  pluralPast: Word('обломали', 5),
  imperativeInformal: Word('обломай', 5),
  imperativeFormal: Word('обломайте', 5),
  imperfect: [],
};

perfectVerbs.set(обломать.name.text, обломать);

export { обломать };