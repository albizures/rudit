import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шевелить: PerfectVerb = {
  name: Word('шевелить', 5),
  singular1stPerson: Word('шевелю', 5),
  singular2ndPerson: Word('шевелишь', 5),
  singular3rdPerson: Word('шевелит', 5),
  plural1stPerson: Word('шевелим', 5),
  plural2ndPerson: Word('шевелите', 5),
  plural3rdPerson: Word('шевелят', 5),
  masculinePast: Word('шевелил', 5),
  femininePast: Word('шевелила', 5),
  neuterPast: Word('шевелило', 5),
  pluralPast: Word('шевелили', 5),
  imperativeInformal: Word('шевели', 5),
  imperativeFormal: Word('шевелите', 5),
  imperfect: [],
};

perfectVerbs.set(шевелить.name.text, шевелить);

export { шевелить };