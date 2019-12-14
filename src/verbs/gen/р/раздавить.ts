import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздавить: PerfectVerb = {
  name: Word('раздавить', 6),
  singular1stPerson: Word('раздавлю', 7),
  singular2ndPerson: Word('раздавишь', 4),
  singular3rdPerson: Word('раздавит', 4),
  plural1stPerson: Word('раздавим', 4),
  plural2ndPerson: Word('раздавите', 4),
  plural3rdPerson: Word('раздавят', 4),
  masculinePast: Word('раздавил', 6),
  femininePast: Word('раздавила', 6),
  neuterPast: Word('раздавило', 6),
  pluralPast: Word('раздавили', 6),
  imperativeInformal: Word('раздави', 6),
  imperativeFormal: Word('раздавите', 6),
  imperfect: [],
};

perfectVerbs.set(раздавить.name.text, раздавить);

export { раздавить };