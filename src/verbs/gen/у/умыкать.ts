import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умыкать: PerfectVerb = {
  name: Word('умыкать', 2),
  singular1stPerson: Word('умыкаю', 2),
  singular2ndPerson: Word('умыкаешь', 2),
  singular3rdPerson: Word('умыкает', 2),
  plural1stPerson: Word('умыкаем', 2),
  plural2ndPerson: Word('умыкаете', 2),
  plural3rdPerson: Word('умыкают', 2),
  masculinePast: Word('умыкал', 2),
  femininePast: Word('умыкала', 2),
  neuterPast: Word('умыкало', 2),
  pluralPast: Word('умыкали', 2),
  imperativeInformal: Word('умыкай', 2),
  imperativeFormal: Word('умыкайте', 2),
  imperfect: [],
};

perfectVerbs.set(умыкать.name.text, умыкать);

export { умыкать };