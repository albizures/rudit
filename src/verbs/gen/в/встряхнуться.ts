import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const встряхнуться: PerfectVerb = {
  name: Word('встряхнуться', 7),
  singular1stPerson: Word('встряхнусь', 7),
  singular2ndPerson: Word('встряхнёшься', 4),
  singular3rdPerson: Word('встряхнётся', 4),
  plural1stPerson: Word('встряхнёмся', 4),
  plural2ndPerson: Word('встряхнётесь', 9),
  plural3rdPerson: Word('встряхнутся', 7),
  masculinePast: Word('встряхнулся', 7),
  femininePast: Word('встряхнулась', 7),
  neuterPast: Word('встряхнулось', 7),
  pluralPast: Word('встряхнулись', 7),
  imperativeInformal: Word('встряхнись', 7),
  imperativeFormal: Word('встряхнитесь', 7),
  imperfect: [],
};

perfectVerbs.set(встряхнуться.name.text, встряхнуться);

export { встряхнуться };