import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расшить: PerfectVerb = {
  name: Word('расшить', 4),
  singular1stPerson: Word('разошью', 6),
  singular2ndPerson: Word('разошьёшь', 6),
  singular3rdPerson: Word('разошьёт', 6),
  plural1stPerson: Word('разошьём', 6),
  plural2ndPerson: Word('разошьёте', 6),
  plural3rdPerson: Word('разошьют', 6),
  masculinePast: Word('расшил', 4),
  femininePast: Word('расшила', 4),
  neuterPast: Word('расшило', 4),
  pluralPast: Word('расшили', 4),
  imperativeInformal: Word('расшей', 4),
  imperativeFormal: Word('расшейте', 4),
  imperfect: [],
};

perfectVerbs.set(расшить.name.text, расшить);

export { расшить };