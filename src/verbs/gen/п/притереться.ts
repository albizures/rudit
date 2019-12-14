import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притереться: PerfectVerb = {
  name: Word('притереться', 6),
  singular1stPerson: Word('притрусь', 5),
  singular2ndPerson: Word('притрёшься', 5),
  singular3rdPerson: Word('притрётся', 5),
  plural1stPerson: Word('притрёмся', 5),
  plural2ndPerson: Word('притрётесь', 5),
  plural3rdPerson: Word('притрутся', 5),
  masculinePast: Word('притерся', 4),
  femininePast: Word('притерлась', 4),
  neuterPast: Word('притерлось', 4),
  pluralPast: Word('притерлись', 4),
  imperativeInformal: Word('притрись', 5),
  imperativeFormal: Word('притритесь', 5),
  imperfect: [],
};

perfectVerbs.set(притереться.name.text, притереться);

export { притереться };