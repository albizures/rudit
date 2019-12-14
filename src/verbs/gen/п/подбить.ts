import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подбить: PerfectVerb = {
  name: Word('подбить', 4),
  singular1stPerson: Word('подобью', 6),
  singular2ndPerson: Word('подобьёшь', 1),
  singular3rdPerson: Word('подобьёт', 1),
  plural1stPerson: Word('подобьём', 1),
  plural2ndPerson: Word('подобьёте', 8),
  plural3rdPerson: Word('подобьют', 6),
  masculinePast: Word('подбил', 4),
  femininePast: Word('подбила', 4),
  neuterPast: Word('подбило', 4),
  pluralPast: Word('подбили', 4),
  imperativeInformal: Word('подбей', 4),
  imperativeFormal: Word('подбейте', 4),
  imperfect: [],
};

perfectVerbs.set(подбить.name.text, подбить);

export { подбить };