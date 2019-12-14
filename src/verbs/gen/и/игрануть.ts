import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const игрануть: PerfectVerb = {
  name: Word('игрануть', 5),
  singular1stPerson: Word('играну', 5),
  singular2ndPerson: Word('игранёшь', 3),
  singular3rdPerson: Word('игранёт', 3),
  plural1stPerson: Word('игранём', 3),
  plural2ndPerson: Word('игранёте', 3),
  plural3rdPerson: Word('игранут', 5),
  masculinePast: Word('игранул', 5),
  femininePast: Word('игранула', 5),
  neuterPast: Word('игрануло', 5),
  pluralPast: Word('игранули', 5),
  imperativeInformal: Word('играни', 5),
  imperativeFormal: Word('играните', 5),
  imperfect: [],
};

perfectVerbs.set(игрануть.name.text, игрануть);

export { игрануть };