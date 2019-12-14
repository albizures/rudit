import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выносить: PerfectVerb = {
  name: Word('выносить', 1),
  singular1stPerson: Word('выношу', 1),
  singular2ndPerson: Word('выносишь', 1),
  singular3rdPerson: Word('выносит', 1),
  plural1stPerson: Word('выносим', 1),
  plural2ndPerson: Word('выносите', 1),
  plural3rdPerson: Word('выносят', 1),
  masculinePast: Word('выносил', 1),
  femininePast: Word('выносила', 1),
  neuterPast: Word('выносило', 1),
  pluralPast: Word('выносили', 1),
  imperativeInformal: Word('выноси', 1),
  imperativeFormal: Word('выносите', 1),
  imperfect: [],
};

perfectVerbs.set(выносить.name.text, выносить);

export { выносить };