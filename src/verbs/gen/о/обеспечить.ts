import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обеспечить: PerfectVerb = {
  name: Word('обеспечить', 5),
  singular1stPerson: Word('обеспечу', 5),
  singular2ndPerson: Word('обеспечишь', 5),
  singular3rdPerson: Word('обеспечит', 5),
  plural1stPerson: Word('обеспечим', 5),
  plural2ndPerson: Word('обеспечите', 5),
  plural3rdPerson: Word('обеспечат', 5),
  masculinePast: Word('обеспечил', 5),
  femininePast: Word('обеспечила', 5),
  neuterPast: Word('обеспечило', 5),
  pluralPast: Word('обеспечили', 5),
  imperativeInformal: Word('обеспечь', 5),
  imperativeFormal: Word('обеспечьте', 5),
  imperfect: ['обеспечивать'],
};

perfectVerbs.set(обеспечить.name.text, обеспечить);

export { обеспечить };