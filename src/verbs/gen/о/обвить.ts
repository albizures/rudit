import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвить: PerfectVerb = {
  name: Word('обвить', 3),
  singular1stPerson: Word('обовью', 5),
  singular2ndPerson: Word('обовьёшь', 5),
  singular3rdPerson: Word('обовьёт', 5),
  plural1stPerson: Word('обовьём', 5),
  plural2ndPerson: Word('обовьёте', 5),
  plural3rdPerson: Word('обовьют', 5),
  masculinePast: Word('обвил', 3),
  femininePast: Word('обвила', 5),
  neuterPast: Word('обвило', 3),
  pluralPast: Word('обвили', 3),
  imperativeInformal: Word('обвей', 3),
  imperativeFormal: Word('обвейте', 3),
  imperfect: [],
};

perfectVerbs.set(обвить.name.text, обвить);

export { обвить };