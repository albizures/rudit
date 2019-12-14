import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вносить: PerfectVerb = {
  name: Word('вносить', 4),
  singular1stPerson: Word('вношу', 4),
  singular2ndPerson: Word('вносишь', 2),
  singular3rdPerson: Word('вносит', 2),
  plural1stPerson: Word('вносим', 2),
  plural2ndPerson: Word('вносите', 2),
  plural3rdPerson: Word('вносят', 2),
  masculinePast: Word('вносил', 4),
  femininePast: Word('вносила', 4),
  neuterPast: Word('вносило', 4),
  pluralPast: Word('вносили', 4),
  imperativeInformal: Word('вноси', 4),
  imperativeFormal: Word('вносите', 4),
  imperfect: ['внести'],
};

perfectVerbs.set(вносить.name.text, вносить);

export { вносить };