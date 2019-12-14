import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разноситься: PerfectVerb = {
  name: Word('разноситься', 6),
  singular1stPerson: Word('разношусь', 6),
  singular2ndPerson: Word('разносишься', 4),
  singular3rdPerson: Word('разносится', 4),
  plural1stPerson: Word('разносимся', 4),
  plural2ndPerson: Word('разноситесь', 4),
  plural3rdPerson: Word('разносятся', 4),
  masculinePast: Word('разносился', 6),
  femininePast: Word('разносилась', 6),
  neuterPast: Word('разносилось', 6),
  pluralPast: Word('разносились', 6),
  imperativeInformal: Word('разносись', 6),
  imperativeFormal: Word('разноситесь', 6),
  imperfect: [],
};

perfectVerbs.set(разноситься.name.text, разноситься);

export { разноситься };