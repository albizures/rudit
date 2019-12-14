import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разоружать: PerfectVerb = {
  name: Word('разоружать', 7),
  singular1stPerson: Word('разоружаю', 7),
  singular2ndPerson: Word('разоружаешь', 7),
  singular3rdPerson: Word('разоружает', 7),
  plural1stPerson: Word('разоружаем', 7),
  plural2ndPerson: Word('разоружаете', 7),
  plural3rdPerson: Word('разоружают', 7),
  masculinePast: Word('разоружал', 7),
  femininePast: Word('разоружала', 7),
  neuterPast: Word('разоружало', 7),
  pluralPast: Word('разоружали', 7),
  imperativeInformal: Word('разоружай', 7),
  imperativeFormal: Word('разоружайте', 7),
  imperfect: [],
};

perfectVerbs.set(разоружать.name.text, разоружать);

export { разоружать };