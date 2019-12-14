import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разоружить: PerfectVerb = {
  name: Word('разоружить', 7),
  singular1stPerson: Word('разоружу', 7),
  singular2ndPerson: Word('разоружишь', 7),
  singular3rdPerson: Word('разоружит', 7),
  plural1stPerson: Word('разоружим', 7),
  plural2ndPerson: Word('разоружите', 7),
  plural3rdPerson: Word('разоружат', 7),
  masculinePast: Word('разоружил', 7),
  femininePast: Word('разоружила', 7),
  neuterPast: Word('разоружило', 7),
  pluralPast: Word('разоружили', 7),
  imperativeInformal: Word('разоружи', 7),
  imperativeFormal: Word('разоружите', 7),
  imperfect: [],
};

perfectVerbs.set(разоружить.name.text, разоружить);

export { разоружить };