import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стыдить: PerfectVerb = {
  name: Word('стыдить', 4),
  singular1stPerson: Word('стыжу', 4),
  singular2ndPerson: Word('стыдишь', 4),
  singular3rdPerson: Word('стыдит', 4),
  plural1stPerson: Word('стыдим', 4),
  plural2ndPerson: Word('стыдите', 4),
  plural3rdPerson: Word('стыдят', 4),
  masculinePast: Word('стыдил', 4),
  femininePast: Word('стыдила', 4),
  neuterPast: Word('стыдило', 4),
  pluralPast: Word('стыдили', 4),
  imperativeInformal: Word('стыди', 4),
  imperativeFormal: Word('стыдите', 4),
  imperfect: [],
};

perfectVerbs.set(стыдить.name.text, стыдить);

export { стыдить };