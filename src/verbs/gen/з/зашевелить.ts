import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашевелить: PerfectVerb = {
  name: Word('зашевелить', 7),
  singular1stPerson: Word('зашевелю', 7),
  singular2ndPerson: Word('зашевелишь', 7),
  singular3rdPerson: Word('зашевелит', 7),
  plural1stPerson: Word('зашевелим', 7),
  plural2ndPerson: Word('зашевелите', 7),
  plural3rdPerson: Word('зашевелят', 7),
  masculinePast: Word('зашевелил', 7),
  femininePast: Word('зашевелила', 7),
  neuterPast: Word('зашевелило', 7),
  pluralPast: Word('зашевелили', 7),
  imperativeInformal: Word('зашевели', 7),
  imperativeFormal: Word('зашевелите', 7),
  imperfect: [],
};

perfectVerbs.set(зашевелить.name.text, зашевелить);

export { зашевелить };