import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обожраться: PerfectVerb = {
  name: Word('обожраться', 5),
  singular1stPerson: Word('обожрусь', 5),
  singular2ndPerson: Word('обожрёшься', 0),
  singular3rdPerson: Word('обожрётся', 0),
  plural1stPerson: Word('обожрёмся', 0),
  plural2ndPerson: Word('обожрётесь', 7),
  plural3rdPerson: Word('обожрутся', 5),
  masculinePast: Word('обожрался', 5),
  femininePast: Word('обожралась', 7),
  neuterPast: Word('обожралось//обожрало'сь', 5),
  pluralPast: Word('обожрались//обожрали'сь', 5),
  imperativeInformal: Word('обожрись', 5),
  imperativeFormal: Word('обожритесь', 5),
  imperfect: [],
};

perfectVerbs.set(обожраться.name.text, обожраться);

export { обожраться };