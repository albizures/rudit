import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обозначить: PerfectVerb = {
  name: Word('обозначить', 5),
  singular1stPerson: Word('обозначу', 5),
  singular2ndPerson: Word('обозначишь', 5),
  singular3rdPerson: Word('обозначит', 5),
  plural1stPerson: Word('обозначим', 5),
  plural2ndPerson: Word('обозначите', 5),
  plural3rdPerson: Word('обозначат', 5),
  masculinePast: Word('обозначил', 5),
  femininePast: Word('обозначила', 5),
  neuterPast: Word('обозначило', 5),
  pluralPast: Word('обозначили', 5),
  imperativeInformal: Word('обозначь', 5),
  imperativeFormal: Word('обозначьте', 5),
  imperfect: [],
};

perfectVerbs.set(обозначить.name.text, обозначить);

export { обозначить };