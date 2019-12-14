import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припереться: PerfectVerb = {
  name: Word('припереться', 6),
  singular1stPerson: Word('припрусь', 5),
  singular2ndPerson: Word('припрёшься', 5),
  singular3rdPerson: Word('припрётся', 5),
  plural1stPerson: Word('припрёмся', 5),
  plural2ndPerson: Word('припрётесь', 5),
  plural3rdPerson: Word('припрутся', 5),
  masculinePast: Word('приперся', 4),
  femininePast: Word('приперлась', 4),
  neuterPast: Word('приперлось', 4),
  pluralPast: Word('приперлись', 4),
  imperativeInformal: Word('припрись', 5),
  imperativeFormal: Word('припритесь', 5),
  imperfect: [],
};

perfectVerbs.set(припереться.name.text, припереться);

export { припереться };