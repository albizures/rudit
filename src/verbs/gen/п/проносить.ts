import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проносить: PerfectVerb = {
  name: Word('проносить', 6),
  singular1stPerson: Word('проношу', 6),
  singular2ndPerson: Word('проносишь', 4),
  singular3rdPerson: Word('проносит', 4),
  plural1stPerson: Word('проносим', 4),
  plural2ndPerson: Word('проносите', 4),
  plural3rdPerson: Word('проносят', 4),
  masculinePast: Word('проносил', 6),
  femininePast: Word('проносила', 6),
  neuterPast: Word('проносило', 6),
  pluralPast: Word('проносили', 6),
  imperativeInformal: Word('проноси', 6),
  imperativeFormal: Word('проносите', 6),
  imperfect: [],
};

perfectVerbs.set(проносить.name.text, проносить);

export { проносить };