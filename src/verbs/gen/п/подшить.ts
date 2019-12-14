import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подшить: PerfectVerb = {
  name: Word('подшить', 4),
  singular1stPerson: Word('подошью', 6),
  singular2ndPerson: Word('подошьёшь', 6),
  singular3rdPerson: Word('подошьёт', 6),
  plural1stPerson: Word('подошьём', 6),
  plural2ndPerson: Word('подошьёте', 6),
  plural3rdPerson: Word('подошьют', 6),
  masculinePast: Word('подшил', 4),
  femininePast: Word('подшила', 4),
  neuterPast: Word('подшило', 4),
  pluralPast: Word('подшили', 4),
  imperativeInformal: Word('подшей', 4),
  imperativeFormal: Word('подшейте', 4),
  imperfect: [],
};

perfectVerbs.set(подшить.name.text, подшить);

export { подшить };