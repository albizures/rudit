import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сквозить: PerfectVerb = {
  name: Word('сквозить', 5),
  singular1stPerson: Word('сквожу', 5),
  singular2ndPerson: Word('сквозишь', 5),
  singular3rdPerson: Word('сквозит', 5),
  plural1stPerson: Word('сквозим', 5),
  plural2ndPerson: Word('сквозите', 5),
  plural3rdPerson: Word('сквозят', 5),
  masculinePast: Word('сквозил', 5),
  femininePast: Word('сквозила', 5),
  neuterPast: Word('сквозило', 5),
  pluralPast: Word('сквозили', 5),
  imperativeInformal: Word('сквози', 5),
  imperativeFormal: Word('сквозите', 5),
  imperfect: [],
};

perfectVerbs.set(сквозить.name.text, сквозить);

export { сквозить };