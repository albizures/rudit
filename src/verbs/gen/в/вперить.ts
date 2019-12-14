import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вперить: PerfectVerb = {
  name: Word('вперить', 4),
  singular1stPerson: Word('вперю', 4),
  singular2ndPerson: Word('вперишь', 4),
  singular3rdPerson: Word('вперит', 4),
  plural1stPerson: Word('вперим', 4),
  plural2ndPerson: Word('вперите', 4),
  plural3rdPerson: Word('вперят', 4),
  masculinePast: Word('вперил', 4),
  femininePast: Word('вперила', 4),
  neuterPast: Word('вперило', 4),
  pluralPast: Word('вперили', 4),
  imperativeInformal: Word('впери', 4),
  imperativeFormal: Word('вперите', 4),
  imperfect: [],
};

perfectVerbs.set(вперить.name.text, вперить);

export { вперить };