import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закружить: PerfectVerb = {
  name: Word('закружить', 6),
  singular1stPerson: Word('закружу', 6),
  singular2ndPerson: Word('закружишь', 4),
  singular3rdPerson: Word('закружит', 4),
  plural1stPerson: Word('закружим', 4),
  plural2ndPerson: Word('закружите', 4),
  plural3rdPerson: Word('закружат', 4),
  masculinePast: Word('закружил', 6),
  femininePast: Word('закружила', 6),
  neuterPast: Word('закружило', 6),
  pluralPast: Word('закружили', 6),
  imperativeInformal: Word('закружи', 6),
  imperativeFormal: Word('закружите', 6),
  imperfect: [],
};

perfectVerbs.set(закружить.name.text, закружить);

export { закружить };