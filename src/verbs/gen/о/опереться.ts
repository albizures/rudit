import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опереться: PerfectVerb = {
  name: Word('опереться', 4),
  singular1stPerson: Word('обопрусь', 5),
  singular2ndPerson: Word('обопрёшься', 0),
  singular3rdPerson: Word('обопрётся', 0),
  plural1stPerson: Word('обопрёмся', 0),
  plural2ndPerson: Word('обопрётесь', 7),
  plural3rdPerson: Word('обопрутся', 5),
  masculinePast: Word('опёрся', 0),
  femininePast: Word('оперлась', 5),
  neuterPast: Word('опеалось//опеало'сь', 3),
  pluralPast: Word('опеались//опеали'сь', 3),
  imperativeInformal: Word('обопрись', 5),
  imperativeFormal: Word('обопритесь', 5),
  imperfect: [],
};

perfectVerbs.set(опереться.name.text, опереться);

export { опереться };