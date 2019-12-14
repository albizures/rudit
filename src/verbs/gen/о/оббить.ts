import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оббить: PerfectVerb = {
  name: Word('оббить', 3),
  singular1stPerson: Word('обобью', 5),
  singular2ndPerson: Word('обобьёшь', 5),
  singular3rdPerson: Word('обобьёт', 5),
  plural1stPerson: Word('обобьём', 5),
  plural2ndPerson: Word('обобьёте', 5),
  plural3rdPerson: Word('обобьют', 5),
  masculinePast: Word('оббил', 3),
  femininePast: Word('оббила', 3),
  neuterPast: Word('оббило', 3),
  pluralPast: Word('оббили', 3),
  imperativeInformal: Word('оббей', 3),
  imperativeFormal: Word('оббейте', 3),
  imperfect: [],
};

perfectVerbs.set(оббить.name.text, оббить);

export { оббить };