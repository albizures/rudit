import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забить: PerfectVerb = {
  name: Word('забить', 3),
  singular1stPerson: Word('забью', 4),
  singular2ndPerson: Word('забьёшь', 1),
  singular3rdPerson: Word('забьёт', 1),
  plural1stPerson: Word('забьём', 1),
  plural2ndPerson: Word('забьёте', 1),
  plural3rdPerson: Word('забьют', 4),
  masculinePast: Word('забил', 3),
  femininePast: Word('забила', 3),
  neuterPast: Word('забило', 3),
  pluralPast: Word('забили', 3),
  imperativeInformal: Word('забей', 3),
  imperativeFormal: Word('забейте', 3),
  imperfect: [],
};

perfectVerbs.set(забить.name.text, забить);

export { забить };