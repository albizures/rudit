import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const встрепенуться: PerfectVerb = {
  name: Word('встрепенуться', 8),
  singular1stPerson: Word('встрепенусь', 8),
  singular2ndPerson: Word('встрепенёшься', 8),
  singular3rdPerson: Word('встрепенётся', 8),
  plural1stPerson: Word('встрепенёмся', 8),
  plural2ndPerson: Word('встрепенётесь', 8),
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