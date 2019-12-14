import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обтечь: PerfectVerb = {
  name: Word('обтечь', 3),
  singular1stPerson: Word('обтеку', 5),
  singular2ndPerson: Word('обтечёшь', 3),
  singular3rdPerson: Word('обтечёт', 3),
  plural1stPerson: Word('обтечём', 3),
  plural2ndPerson: Word('обтечёте', 3),
  plural3rdPerson: Word('обтекут', 5),
  masculinePast: Word('обтёк', 0),
  femininePast: Word('обтекла', 6),
  neuterPast: Word('обтекло', 6),
  pluralPast: Word('обтекли', 6),
  imperativeInformal: Word('обтеки', 5),
  imperativeFormal: Word('обтеките', 5),
  imperfect: [],
};

perfectVerbs.set(обтечь.name.text, обтечь);

export { обтечь };