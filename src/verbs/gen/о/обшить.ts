import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обшить: PerfectVerb = {
  name: Word('обшить', 3),
  singular1stPerson: Word('обошью', 5),
  singular2ndPerson: Word('обошьёшь', 0),
  singular3rdPerson: Word('обошьёт', 0),
  plural1stPerson: Word('обошьём', 0),
  plural2ndPerson: Word('обошьёте', 7),
  plural3rdPerson: Word('обошьют', 5),
  masculinePast: Word('обшил', 3),
  femininePast: Word('обшила', 3),
  neuterPast: Word('обшило', 3),
  pluralPast: Word('обшили', 3),
  imperativeInformal: Word('обшей', 3),
  imperativeFormal: Word('обшейте', 3),
  imperfect: [],
};

perfectVerbs.set(обшить.name.text, обшить);

export { обшить };