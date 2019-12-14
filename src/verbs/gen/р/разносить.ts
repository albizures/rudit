import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разносить: PerfectVerb = {
  name: Word('разносить', 6),
  singular1stPerson: Word('разношу', 6),
  singular2ndPerson: Word('разносишь', 4),
  singular3rdPerson: Word('разносит', 4),
  plural1stPerson: Word('разносим', 4),
  plural2ndPerson: Word('разносите', 4),
  plural3rdPerson: Word('разносят', 4),
  masculinePast: Word('разносил', 6),
  femininePast: Word('разносила', 6),
  neuterPast: Word('разносило', 6),
  pluralPast: Word('разносили', 6),
  imperativeInformal: Word('разноси', 6),
  imperativeFormal: Word('разносите', 6),
  imperfect: [],
};

perfectVerbs.set(разносить.name.text, разносить);

export { разносить };