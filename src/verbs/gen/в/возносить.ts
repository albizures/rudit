import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возносить: PerfectVerb = {
  name: Word('возносить', 6),
  singular1stPerson: Word('возношу', 6),
  singular2ndPerson: Word('возносишь', 4),
  singular3rdPerson: Word('возносит', 4),
  plural1stPerson: Word('возносим', 4),
  plural2ndPerson: Word('возносите', 4),
  plural3rdPerson: Word('возносят', 4),
  masculinePast: Word('возносил', 6),
  femininePast: Word('возносила', 6),
  neuterPast: Word('возносило', 6),
  pluralPast: Word('возносили', 6),
  imperativeInformal: Word('возноси', 6),
  imperativeFormal: Word('возносите', 6),
  imperfect: [],
};

perfectVerbs.set(возносить.name.text, возносить);

export { возносить };