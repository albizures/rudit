import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттереться: PerfectVerb = {
  name: Word('оттереться', 5),
  singular1stPerson: Word('ототрусь', 5),
  singular2ndPerson: Word('ототрёшься', 5),
  singular3rdPerson: Word('ототрётся', 5),
  plural1stPerson: Word('ототрёмся', 5),
  plural2ndPerson: Word('ототрётесь', 5),
  plural3rdPerson: Word('ототрутся', 5),
  masculinePast: Word('оттёрся', 3),
  femininePast: Word('оттёрлась', 3),
  neuterPast: Word('оттёрлось', 3),
  pluralPast: Word('оттёрлись', 3),
  imperativeInformal: Word('ототрись', 5),
  imperativeFormal: Word('ототритесь', 5),
  imperfect: [],
};

perfectVerbs.set(оттереться.name.text, оттереться);

export { оттереться };