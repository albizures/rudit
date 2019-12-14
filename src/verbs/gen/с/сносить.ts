import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сносить: PerfectVerb = {
  name: Word('сносить', 4),
  singular1stPerson: Word('сношу', 4),
  singular2ndPerson: Word('сносишь', 2),
  singular3rdPerson: Word('сносит', 2),
  plural1stPerson: Word('сносим', 2),
  plural2ndPerson: Word('сносите', 2),
  plural3rdPerson: Word('сносят', 2),
  masculinePast: Word('сносил', 4),
  femininePast: Word('сносила', 4),
  neuterPast: Word('сносило', 4),
  pluralPast: Word('сносили', 4),
  imperativeInformal: Word('сноси', 4),
  imperativeFormal: Word('сносите', 4),
  imperfect: [],
};

perfectVerbs.set(сносить.name.text, сносить);

export { сносить };