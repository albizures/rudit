import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разломить: PerfectVerb = {
  name: Word('разломить', 6),
  singular1stPerson: Word('разломлю', 7),
  singular2ndPerson: Word('разломишь', 4),
  singular3rdPerson: Word('разломит', 4),
  plural1stPerson: Word('разломим', 4),
  plural2ndPerson: Word('разломите', 4),
  plural3rdPerson: Word('разломят', 4),
  masculinePast: Word('разломил', 6),
  femininePast: Word('разломила', 6),
  neuterPast: Word('разломило', 6),
  pluralPast: Word('разломили', 6),
  imperativeInformal: Word('разломи', 6),
  imperativeFormal: Word('разломите', 6),
  imperfect: [],
};

perfectVerbs.set(разломить.name.text, разломить);

export { разломить };