import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припереться: PerfectVerb = {
  name: Word('припереться', 6),
  singular1stPerson: Word('припрусь', 5),
  singular2ndPerson: Word('припрёшься', 2),
  singular3rdPerson: Word('припрётся', 2),
  plural1stPerson: Word('припрёмся', 2),
  plural2ndPerson: Word('припрётесь', 7),
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