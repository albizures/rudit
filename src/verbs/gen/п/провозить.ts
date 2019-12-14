import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провозить: PerfectVerb = {
  name: Word('провозить', 6),
  singular1stPerson: Word('провожу', 6),
  singular2ndPerson: Word('провозишь', 4),
  singular3rdPerson: Word('провозит', 4),
  plural1stPerson: Word('провозим', 4),
  plural2ndPerson: Word('провозите', 4),
  plural3rdPerson: Word('провозят', 4),
  masculinePast: Word('провозил', 6),
  femininePast: Word('провозила', 6),
  neuterPast: Word('провозило', 6),
  pluralPast: Word('провозили', 6),
  imperativeInformal: Word('провози', 6),
  imperativeFormal: Word('провозите', 6),
  imperfect: [],
};

perfectVerbs.set(провозить.name.text, провозить);

export { провозить };