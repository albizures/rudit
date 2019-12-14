import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезглавить: PerfectVerb = {
  name: Word('обезглавить', 6),
  singular1stPerson: Word('обезглавлю', 6),
  singular2ndPerson: Word('обезглавишь', 6),
  singular3rdPerson: Word('обезглавит', 6),
  plural1stPerson: Word('обезглавим', 6),
  plural2ndPerson: Word('обезглавите', 6),
  plural3rdPerson: Word('обезглавят', 6),
  masculinePast: Word('обезглавил', 6),
  femininePast: Word('обезглавила', 6),
  neuterPast: Word('обезглавило', 6),
  pluralPast: Word('обезглавили', 6),
  imperativeInformal: Word('обезглавь', 6),
  imperativeFormal: Word('обезглавьте', 6),
  imperfect: [],
};

perfectVerbs.set(обезглавить.name.text, обезглавить);

export { обезглавить };