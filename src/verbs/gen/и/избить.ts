import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const избить: PerfectVerb = {
  name: Word('избить', 3),
  singular1stPerson: Word('изобью', 5),
  singular2ndPerson: Word('изобьёшь', 5),
  singular3rdPerson: Word('изобьёт', 5),
  plural1stPerson: Word('изобьём', 5),
  plural2ndPerson: Word('изобьёте', 5),
  plural3rdPerson: Word('изобьют', 5),
  masculinePast: Word('избил', 3),
  femininePast: Word('избила', 3),
  neuterPast: Word('избило', 3),
  pluralPast: Word('избили', 3),
  imperativeInformal: Word('избей', 3),
  imperativeFormal: Word('избейте', 3),
  imperfect: [],
};

perfectVerbs.set(избить.name.text, избить);

export { избить };