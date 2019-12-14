import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сыгрануть: PerfectVerb = {
  name: Word('сыгрануть', 6),
  singular1stPerson: Word('сыграну', 6),
  singular2ndPerson: Word('сыгранёшь', 6),
  singular3rdPerson: Word('сыгранёт', 6),
  plural1stPerson: Word('сыгранём', 6),
  plural2ndPerson: Word('сыгранёте', 6),
  plural3rdPerson: Word('сыгранут', 6),
  masculinePast: Word('сыгранул', 6),
  femininePast: Word('сыгранула', 6),
  neuterPast: Word('сыгрануло', 6),
  pluralPast: Word('сыгранули', 6),
  imperativeInformal: Word('сыграни', 6),
  imperativeFormal: Word('сыграните', 6),
  imperfect: [],
};

perfectVerbs.set(сыгрануть.name.text, сыгрануть);

export { сыгрануть };