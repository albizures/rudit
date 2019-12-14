import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обить: PerfectVerb = {
  name: Word('обить', 2),
  singular1stPerson: Word('обобью', 5),
  singular2ndPerson: Word('обобьёшь', 5),
  singular3rdPerson: Word('обобьёт', 5),
  plural1stPerson: Word('обобьём', 5),
  plural2ndPerson: Word('обобьёте', 5),
  plural3rdPerson: Word('обобьют', 5),
  masculinePast: Word('обил', 2),
  femininePast: Word('обила', 2),
  neuterPast: Word('обило', 2),
  pluralPast: Word('обили', 2),
  imperativeInformal: Word('обей', 2),
  imperativeFormal: Word('обейте', 2),
  imperfect: [],
};

perfectVerbs.set(обить.name.text, обить);

export { обить };