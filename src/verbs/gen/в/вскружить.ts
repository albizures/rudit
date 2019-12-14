import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскружить: PerfectVerb = {
  name: Word('вскружить', 6),
  singular1stPerson: Word('вскружу', 6),
  singular2ndPerson: Word('вскружишь', 4),
  singular3rdPerson: Word('вскружит', 4),
  plural1stPerson: Word('вскружим', 4),
  plural2ndPerson: Word('вскружите', 4),
  plural3rdPerson: Word('вскружат', 4),
  masculinePast: Word('вскружил', 6),
  femininePast: Word('вскружила', 6),
  neuterPast: Word('вскружило', 6),
  pluralPast: Word('вскружили', 6),
  imperativeInformal: Word('вскружи', 6),
  imperativeFormal: Word('вскружите', 6),
  imperfect: [],
};

perfectVerbs.set(вскружить.name.text, вскружить);

export { вскружить };