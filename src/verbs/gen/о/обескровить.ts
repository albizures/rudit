import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обескровить: PerfectVerb = {
  name: Word('обескровить', 6),
  singular1stPerson: Word('обескровлю', 6),
  singular2ndPerson: Word('обескровишь', 6),
  singular3rdPerson: Word('обескровит', 6),
  plural1stPerson: Word('обескровим', 6),
  plural2ndPerson: Word('обескровите', 6),
  plural3rdPerson: Word('обескровят', 6),
  masculinePast: Word('обескровил', 6),
  femininePast: Word('обескровила', 6),
  neuterPast: Word('обескровило', 6),
  pluralPast: Word('обескровили', 6),
  imperativeInformal: Word('обескровь', 6),
  imperativeFormal: Word('обескровьте', 6),
  imperfect: [],
};

perfectVerbs.set(обескровить.name.text, обескровить);

export { обескровить };