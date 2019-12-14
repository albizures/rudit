import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поносить: PerfectVerb = {
  name: Word('поносить', 5),
  singular1stPerson: Word('поношу', 5),
  singular2ndPerson: Word('поносишь', 3),
  singular3rdPerson: Word('поносит', 3),
  plural1stPerson: Word('поносим', 3),
  plural2ndPerson: Word('поносите', 3),
  plural3rdPerson: Word('поносят', 3),
  masculinePast: Word('поносил', 5),
  femininePast: Word('поносила', 5),
  neuterPast: Word('поносило', 5),
  pluralPast: Word('поносили', 5),
  imperativeInformal: Word('поноси', 5),
  imperativeFormal: Word('поносите', 5),
  imperfect: [],
};

perfectVerbs.set(поносить.name.text, поносить);

export { поносить };