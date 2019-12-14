import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разнообразить: PerfectVerb = {
  name: Word('разнообразить', 8),
  singular1stPerson: Word('разноображу', 8),
  singular2ndPerson: Word('разнообразишь', 8),
  singular3rdPerson: Word('разнообразит', 8),
  plural1stPerson: Word('разнообразим', 8),
  plural2ndPerson: Word('разнообразите', 8),
  plural3rdPerson: Word('разнообразят', 8),
  masculinePast: Word('разнообразил', 8),
  femininePast: Word('разнообразила', 8),
  neuterPast: Word('разнообразило', 8),
  pluralPast: Word('разнообразили', 8),
  imperativeInformal: Word('разнообразь', 8),
  imperativeFormal: Word('разнообразьте', 8),
  imperfect: [],
};

perfectVerbs.set(разнообразить.name.text, разнообразить);

export { разнообразить };