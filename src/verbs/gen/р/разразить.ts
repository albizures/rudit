import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разразить: PerfectVerb = {
  name: Word('разразить', 6),
  singular1stPerson: Word('разражу', 6),
  singular2ndPerson: Word('разразишь', 6),
  singular3rdPerson: Word('разразит', 6),
  plural1stPerson: Word('разразим', 6),
  plural2ndPerson: Word('разразите', 6),
  plural3rdPerson: Word('разразят', 6),
  masculinePast: Word('разразил', 6),
  femininePast: Word('разразила', 6),
  neuterPast: Word('разразило', 6),
  pluralPast: Word('разразили', 6),
  imperativeInformal: Word('разрази', 6),
  imperativeFormal: Word('разразите', 6),
  imperfect: [],
};

perfectVerbs.set(разразить.name.text, разразить);

export { разразить };