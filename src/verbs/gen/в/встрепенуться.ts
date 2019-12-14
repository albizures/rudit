import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const встрепенуться: PerfectVerb = {
  name: Word('встрепенуться', 8),
  singular1stPerson: Word('встрепенусь', 8),
  singular2ndPerson: Word('встрепенёшься', 4),
  singular3rdPerson: Word('встрепенётся', 4),
  plural1stPerson: Word('встрепенёмся', 4),
  plural2ndPerson: Word('встрепенётесь', 4),
  plural3rdPerson: Word('встрепенутся', 8),
  masculinePast: Word('встрепенулся', 8),
  femininePast: Word('встрепенулась', 8),
  neuterPast: Word('встрепенулось', 8),
  pluralPast: Word('встрепенулись', 8),
  imperativeInformal: Word('встрепенись', 8),
  imperativeFormal: Word('встрепенитесь', 8),
  imperfect: [],
};

perfectVerbs.set(встрепенуться.name.text, встрепенуться);

export { встрепенуться };