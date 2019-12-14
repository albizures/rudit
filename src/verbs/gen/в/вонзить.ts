import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вонзить: PerfectVerb = {
  name: Word('вонзить', 4),
  singular1stPerson: Word('вонжу', 4),
  singular2ndPerson: Word('вонзишь', 4),
  singular3rdPerson: Word('вонзит', 4),
  plural1stPerson: Word('вонзим', 4),
  plural2ndPerson: Word('вонзите', 4),
  plural3rdPerson: Word('вонзят', 4),
  masculinePast: Word('вонзил', 4),
  femininePast: Word('вонзила', 4),
  neuterPast: Word('вонзило', 4),
  pluralPast: Word('вонзили', 4),
  imperativeInformal: Word('вонзи', 4),
  imperativeFormal: Word('вонзите', 4),
  imperfect: [],
};

perfectVerbs.set(вонзить.name.text, вонзить);

export { вонзить };