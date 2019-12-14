import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просквозить: PerfectVerb = {
  name: Word('просквозить', 8),
  singular1stPerson: Word('просквожу', 8),
  singular2ndPerson: Word('просквозишь', 8),
  singular3rdPerson: Word('просквозит', 8),
  plural1stPerson: Word('просквозим', 8),
  plural2ndPerson: Word('просквозите', 8),
  plural3rdPerson: Word('просквозят', 8),
  masculinePast: Word('просквозил', 8),
  femininePast: Word('просквозила', 8),
  neuterPast: Word('просквозило', 8),
  pluralPast: Word('просквозили', 8),
  imperativeInformal: Word('просквози', 8),
  imperativeFormal: Word('просквозите', 8),
  imperfect: [],
};

perfectVerbs.set(просквозить.name.text, просквозить);

export { просквозить };