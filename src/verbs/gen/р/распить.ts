import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распить: PerfectVerb = {
  name: Word('распить', 4),
  singular1stPerson: Word('разопью', 6),
  singular2ndPerson: Word('разопьёшь', 1),
  singular3rdPerson: Word('разопьёт', 1),
  plural1stPerson: Word('разопьём', 1),
  plural2ndPerson: Word('разопьёте', 1),
  plural3rdPerson: Word('разопьют', 6),
  masculinePast: Word('распил', 4),
  femininePast: Word('распила', 6),
  neuterPast: Word('распило', 4),
  pluralPast: Word('распили', 4),
  imperativeInformal: Word('распей', 4),
  imperativeFormal: Word('распейте', 4),
  imperfect: [],
};

perfectVerbs.set(распить.name.text, распить);

export { распить };