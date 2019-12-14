import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбить: PerfectVerb = {
  name: Word('взбить', 3),
  singular1stPerson: Word('взобью', 5),
  singular2ndPerson: Word('взобьёшь', 2),
  singular3rdPerson: Word('взобьёт', 2),
  plural1stPerson: Word('взобьём', 2),
  plural2ndPerson: Word('взобьёте', 7),
  plural3rdPerson: Word('взобьют', 5),
  masculinePast: Word('взбил', 3),
  femininePast: Word('взбила', 3),
  neuterPast: Word('взбило', 3),
  pluralPast: Word('взбили', 3),
  imperativeInformal: Word('взбей', 3),
  imperativeFormal: Word('взбейте', 3),
  imperfect: [],
};

perfectVerbs.set(взбить.name.text, взбить);

export { взбить };