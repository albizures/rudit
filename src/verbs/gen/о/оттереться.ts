import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттереться: PerfectVerb = {
  name: Word('оттереться', 5),
  singular1stPerson: Word('ототрусь', 5),
  singular2ndPerson: Word('ототрёшься', 0),
  singular3rdPerson: Word('ототрётся', 0),
  plural1stPerson: Word('ототрёмся', 0),
  plural2ndPerson: Word('ототрётесь', 7),
  plural3rdPerson: Word('ототрутся', 5),
  masculinePast: Word('оттёрся', 0),
  femininePast: Word('оттёрлась', 6),
  neuterPast: Word('оттёрлось', 0),
  pluralPast: Word('оттёрлись', 6),
  imperativeInformal: Word('ототрись', 5),
  imperativeFormal: Word('ототритесь', 5),
  imperfect: [],
};

perfectVerbs.set(оттереться.name.text, оттереться);

export { оттереться };