import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плодоносить: PerfectVerb = {
  name: Word('плодоносить', 8),
  singular1stPerson: Word('плодоношу', 8),
  singular2ndPerson: Word('плодоносишь', 6),
  singular3rdPerson: Word('плодоносит', 6),
  plural1stPerson: Word('плодоносим', 6),
  plural2ndPerson: Word('плодоносите', 6),
  plural3rdPerson: Word('плодоносят', 6),
  masculinePast: Word('плодоносил', 8),
  femininePast: Word('плодоносила', 8),
  neuterPast: Word('плодоносило', 8),
  pluralPast: Word('плодоносили', 8),
  imperativeInformal: Word('плодоноси', 8),
  imperativeFormal: Word('плодоносите', 8),
  imperfect: [],
};

perfectVerbs.set(плодоносить.name.text, плодоносить);

export { плодоносить };