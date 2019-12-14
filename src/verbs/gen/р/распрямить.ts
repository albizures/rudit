import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распрямить: PerfectVerb = {
  name: Word('распрямить', 7),
  singular1stPerson: Word('распрямлю', 8),
  singular2ndPerson: Word('распрямишь', 7),
  singular3rdPerson: Word('распрямит', 7),
  plural1stPerson: Word('распрямим', 7),
  plural2ndPerson: Word('распрямите', 7),
  plural3rdPerson: Word('распрямят', 7),
  masculinePast: Word('распрямил', 7),
  femininePast: Word('распрямила', 7),
  neuterPast: Word('распрямило', 7),
  pluralPast: Word('распрямили', 7),
  imperativeInformal: Word('распрями', 7),
  imperativeFormal: Word('распрямите', 7),
  imperfect: [],
};

perfectVerbs.set(распрямить.name.text, распрямить);

export { распрямить };