import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вередить: PerfectVerb = {
  name: Word('вередить', 5),
  singular1stPerson: Word('вережу', 5),
  singular2ndPerson: Word('вередишь', 5),
  singular3rdPerson: Word('вередит', 5),
  plural1stPerson: Word('вередим', 5),
  plural2ndPerson: Word('вередите', 5),
  plural3rdPerson: Word('вередят', 5),
  masculinePast: Word('вередил', 5),
  femininePast: Word('вередила', 5),
  neuterPast: Word('вередило', 5),
  pluralPast: Word('вередили', 5),
  imperativeInformal: Word('вереди', 5),
  imperativeFormal: Word('вередите', 5),
  imperfect: [],
};

perfectVerbs.set(вередить.name.text, вередить);

export { вередить };