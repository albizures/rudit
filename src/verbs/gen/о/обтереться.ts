import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обтереться: PerfectVerb = {
  name: Word('обтереться', 5),
  singular1stPerson: Word('оботрусь', 5),
  singular2ndPerson: Word('оботрёшься', 5),
  singular3rdPerson: Word('оботрётся', 5),
  plural1stPerson: Word('оботрёмся', 5),
  plural2ndPerson: Word('оботрётесь', 5),
  plural3rdPerson: Word('оботрутся', 5),
  masculinePast: Word('обтёрся', 3),
  femininePast: Word('обтёрлась', 3),
  neuterPast: Word('обтёрлось', 3),
  pluralPast: Word('обтёрлись', 3),
  imperativeInformal: Word('оботрись', 5),
  imperativeFormal: Word('оботритесь', 5),
  imperfect: [],
};

perfectVerbs.set(обтереться.name.text, обтереться);

export { обтереться };