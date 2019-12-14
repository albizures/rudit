import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потереться: PerfectVerb = {
  name: Word('потереться', 5),
  singular1stPerson: Word('потрусь', 4),
  singular2ndPerson: Word('потрёшься', 4),
  singular3rdPerson: Word('потрётся', 4),
  plural1stPerson: Word('потрёмся', 4),
  plural2ndPerson: Word('потрётесь', 4),
  plural3rdPerson: Word('потрутся', 4),
  masculinePast: Word('потерся', 3),
  femininePast: Word('потерлась', 3),
  neuterPast: Word('потерлось', 3),
  pluralPast: Word('потерлись', 3),
  imperativeInformal: Word('потрись', 4),
  imperativeFormal: Word('потритесь', 4),
  imperfect: [],
};

perfectVerbs.set(потереться.name.text, потереться);

export { потереться };