import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обжигать: PerfectVerb = {
  name: Word('обжигать', 5),
  singular1stPerson: Word('обжигаю', 5),
  singular2ndPerson: Word('обжигаешь', 5),
  singular3rdPerson: Word('обжигает', 5),
  plural1stPerson: Word('обжигаем', 5),
  plural2ndPerson: Word('обжигаете', 5),
  plural3rdPerson: Word('обжигают', 5),
  masculinePast: Word('обжигал', 5),
  femininePast: Word('обжигала', 5),
  neuterPast: Word('обжигало', 5),
  pluralPast: Word('обжигали', 5),
  imperativeInformal: Word('обжигай', 5),
  imperativeFormal: Word('обжигайте', 5),
  imperfect: [],
};

perfectVerbs.set(обжигать.name.text, обжигать);

export { обжигать };