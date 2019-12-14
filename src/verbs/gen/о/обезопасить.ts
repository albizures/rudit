import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезопасить: PerfectVerb = {
  name: Word('обезопасить', 6),
  singular1stPerson: Word('обезопашу', 6),
  singular2ndPerson: Word('обезопасишь', 6),
  singular3rdPerson: Word('обезопасит', 6),
  plural1stPerson: Word('обезопасим', 6),
  plural2ndPerson: Word('обезопасите', 6),
  plural3rdPerson: Word('обезопасят', 6),
  masculinePast: Word('обезопасил', 6),
  femininePast: Word('обезопасила', 6),
  neuterPast: Word('обезопасило', 6),
  pluralPast: Word('обезопасили', 6),
  imperativeInformal: Word('обезопась', 6),
  imperativeFormal: Word('обезопасьте', 6),
  imperfect: [],
};

perfectVerbs.set(обезопасить.name.text, обезопасить);

export { обезопасить };