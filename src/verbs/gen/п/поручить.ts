import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поручить: PerfectVerb = {
  name: Word('поручить', 5),
  singular1stPerson: Word('поручу', 5),
  singular2ndPerson: Word('поручишь', 3),
  singular3rdPerson: Word('поручит', 3),
  plural1stPerson: Word('поручим', 3),
  plural2ndPerson: Word('поручите', 3),
  plural3rdPerson: Word('поручат', 3),
  masculinePast: Word('поручил', 5),
  femininePast: Word('поручила', 5),
  neuterPast: Word('поручило', 5),
  pluralPast: Word('поручили', 5),
  imperativeInformal: Word('поручи', 5),
  imperativeFormal: Word('поручите', 5),
  imperfect: [],
};

perfectVerbs.set(поручить.name.text, поручить);

export { поручить };