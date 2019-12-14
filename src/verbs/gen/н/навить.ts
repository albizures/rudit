import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навить: PerfectVerb = {
  name: Word('навить', 3),
  singular1stPerson: Word('навью', 4),
  singular2ndPerson: Word('навьёшь', 1),
  singular3rdPerson: Word('навьёт', 1),
  plural1stPerson: Word('навьём', 1),
  plural2ndPerson: Word('навьёте', 1),
  plural3rdPerson: Word('навьют', 4),
  masculinePast: Word('навил', 3),
  femininePast: Word('навила', 5),
  neuterPast: Word('навило', 3),
  pluralPast: Word('навили', 3),
  imperativeInformal: Word('навей', 3),
  imperativeFormal: Word('навейте', 3),
  imperfect: [],
};

perfectVerbs.set(навить.name.text, навить);

export { навить };