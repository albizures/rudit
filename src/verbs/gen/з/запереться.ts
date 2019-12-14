import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запереться: PerfectVerb = {
  name: Word('запереться', 5),
  singular1stPerson: Word('запрусь', 4),
  singular2ndPerson: Word('запрёшься', 4),
  singular3rdPerson: Word('запрётся', 4),
  plural1stPerson: Word('запрёмся', 4),
  plural2ndPerson: Word('запрётесь', 4),
  plural3rdPerson: Word('запрутся', 4),
  masculinePast: Word('заперся', 1),
  femininePast: Word('заперлась', 6),
  neuterPast: Word('заперлось//заперло'сь', 1),
  pluralPast: Word('заперлись//заперли'сь', 1),
  imperativeInformal: Word('запрись', 4),
  imperativeFormal: Word('запритесь', 4),
  imperfect: [],
};

perfectVerbs.set(запереться.name.text, запереться);

export { запереться };