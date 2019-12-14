import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбить: PerfectVerb = {
  name: Word('разбить', 4),
  singular1stPerson: Word('разобью', 6),
  singular2ndPerson: Word('разобьёшь', 6),
  singular3rdPerson: Word('разобьёт', 6),
  plural1stPerson: Word('разобьём', 6),
  plural2ndPerson: Word('разобьёте', 6),
  plural3rdPerson: Word('разобьют', 6),
  masculinePast: Word('разбил', 4),
  femininePast: Word('разбила', 4),
  neuterPast: Word('разбило', 4),
  pluralPast: Word('разбили', 4),
  imperativeInformal: Word('разбей', 4),
  imperativeFormal: Word('разбейте', 4),
  imperfect: ['разбивать'],
};

perfectVerbs.set(разбить.name.text, разбить);

export { разбить };