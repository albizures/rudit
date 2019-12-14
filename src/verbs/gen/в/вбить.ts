import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вбить: PerfectVerb = {
  name: Word('вбить', 2),
  singular1stPerson: Word('вобью', 4),
  singular2ndPerson: Word('вобьёшь', 1),
  singular3rdPerson: Word('вобьёт', 1),
  plural1stPerson: Word('вобьём', 1),
  plural2ndPerson: Word('вобьёте', 6),
  plural3rdPerson: Word('вобьют', 4),
  masculinePast: Word('вбил', 2),
  femininePast: Word('вбила', 2),
  neuterPast: Word('вбило', 2),
  pluralPast: Word('вбили', 2),
  imperativeInformal: Word('вбей', 2),
  imperativeFormal: Word('вбейте', 2),
  imperfect: [],
};

perfectVerbs.set(вбить.name.text, вбить);

export { вбить };