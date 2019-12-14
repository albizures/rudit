import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повернуть: PerfectVerb = {
  name: Word('повернуть', 6),
  singular1stPerson: Word('поверну', 6),
  singular2ndPerson: Word('повернёшь', 6),
  singular3rdPerson: Word('повернёт', 6),
  plural1stPerson: Word('повернём', 6),
  plural2ndPerson: Word('повернёте', 6),
  plural3rdPerson: Word('повернут', 6),
  masculinePast: Word('повернул', 6),
  femininePast: Word('повернула', 6),
  neuterPast: Word('повернуло', 6),
  pluralPast: Word('повернули', 6),
  imperativeInformal: Word('поверни', 6),
  imperativeFormal: Word('поверните', 6),
  imperfect: ['поворачивать'],
};

perfectVerbs.set(повернуть.name.text, повернуть);

export { повернуть };