import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обтереться: PerfectVerb = {
  name: Word('обтереться', 5),
  singular1stPerson: Word('оботрусь', 5),
  singular2ndPerson: Word('оботрёшься', 0),
  singular3rdPerson: Word('оботрётся', 0),
  plural1stPerson: Word('оботрёмся', 0),
  plural2ndPerson: Word('оботрётесь', 7),
  plural3rdPerson: Word('оботрутся', 5),
  masculinePast: Word('обтёрся', 0),
  femininePast: Word('обтёрлась', 6),
  neuterPast: Word('обтёрлось', 0),
  pluralPast: Word('обтёрлись', 6),
  imperativeInformal: Word('оботрись', 5),
  imperativeFormal: Word('оботритесь', 5),
  imperfect: [],
};

perfectVerbs.set(обтереться.name.text, обтереться);

export { обтереться };