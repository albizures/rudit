import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвить: PerfectVerb = {
  name: Word('подвить', 4),
  singular1stPerson: Word('подовью', 6),
  singular2ndPerson: Word('подовьёшь', 6),
  singular3rdPerson: Word('подовьёт', 6),
  plural1stPerson: Word('подовьём', 6),
  plural2ndPerson: Word('подовьёте', 6),
  plural3rdPerson: Word('подовьют', 6),
  masculinePast: Word('подвил', 4),
  femininePast: Word('подвила', 6),
  neuterPast: Word('подвило', 4),
  pluralPast: Word('подвили', 4),
  imperativeInformal: Word('подвей', 4),
  imperativeFormal: Word('подвейте', 4),
  imperfect: [],
};

perfectVerbs.set(подвить.name.text, подвить);

export { подвить };