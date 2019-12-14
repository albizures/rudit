import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезоружить: PerfectVerb = {
  name: Word('обезоружить', 6),
  singular1stPerson: Word('обезоружу', 6),
  singular2ndPerson: Word('обезоружишь', 6),
  singular3rdPerson: Word('обезоружит', 6),
  plural1stPerson: Word('обезоружим', 6),
  plural2ndPerson: Word('обезоружите', 6),
  plural3rdPerson: Word('обезоружат', 6),
  masculinePast: Word('обезоружил', 6),
  femininePast: Word('обезоружила', 6),
  neuterPast: Word('обезоружило', 6),
  pluralPast: Word('обезоружили', 6),
  imperativeInformal: Word('обезоружь', 6),
  imperativeFormal: Word('обезоружьте', 6),
  imperfect: [],
};

perfectVerbs.set(обезоружить.name.text, обезоружить);

export { обезоружить };