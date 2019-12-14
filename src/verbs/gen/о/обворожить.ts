import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обворожить: PerfectVerb = {
  name: Word('обворожить', 7),
  singular1stPerson: Word('обворожу', 7),
  singular2ndPerson: Word('обворожишь', 7),
  singular3rdPerson: Word('обворожит', 7),
  plural1stPerson: Word('обворожим', 7),
  plural2ndPerson: Word('обворожите', 7),
  plural3rdPerson: Word('обворожат', 7),
  masculinePast: Word('обворожил', 7),
  femininePast: Word('обворожила', 7),
  neuterPast: Word('обворожило', 7),
  pluralPast: Word('обворожили', 7),
  imperativeInformal: Word('обворожи', 7),
  imperativeFormal: Word('обворожите', 7),
  imperfect: [],
};

perfectVerbs.set(обворожить.name.text, обворожить);

export { обворожить };