import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбить: PerfectVerb = {
  name: Word('отбить', 3),
  singular1stPerson: Word('отобью', 5),
  singular2ndPerson: Word('отобьёшь', 0),
  singular3rdPerson: Word('отобьёт', 0),
  plural1stPerson: Word('отобьём', 0),
  plural2ndPerson: Word('отобьёте', 7),
  plural3rdPerson: Word('отобьют', 5),
  masculinePast: Word('отбил', 3),
  femininePast: Word('отбила', 3),
  neuterPast: Word('отбило', 3),
  pluralPast: Word('отбили', 3),
  imperativeInformal: Word('отбей', 3),
  imperativeFormal: Word('отбейте', 3),
  imperfect: [],
};

perfectVerbs.set(отбить.name.text, отбить);

export { отбить };