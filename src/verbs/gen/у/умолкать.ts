import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умолкать: PerfectVerb = {
  name: Word('умолкать', 5),
  singular1stPerson: Word('умолкаю', 5),
  singular2ndPerson: Word('умолкаешь', 5),
  singular3rdPerson: Word('умолкает', 5),
  plural1stPerson: Word('умолкаем', 5),
  plural2ndPerson: Word('умолкаете', 5),
  plural3rdPerson: Word('умолкают', 5),
  masculinePast: Word('умолкал', 5),
  femininePast: Word('умолкала', 5),
  neuterPast: Word('умолкало', 5),
  pluralPast: Word('умолкали', 5),
  imperativeInformal: Word('умолкай', 5),
  imperativeFormal: Word('умолкайте', 5),
  imperfect: [],
};

perfectVerbs.set(умолкать.name.text, умолкать);

export { умолкать };