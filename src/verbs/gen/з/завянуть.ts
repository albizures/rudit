import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завянуть: PerfectVerb = {
  name: Word('завянуть', 3),
  singular1stPerson: Word('завяну', 3),
  singular2ndPerson: Word('завянешь', 3),
  singular3rdPerson: Word('завянет', 3),
  plural1stPerson: Word('завянем', 3),
  plural2ndPerson: Word('завянете', 3),
  plural3rdPerson: Word('завянут', 3),
  masculinePast: Word('завял,завянул', 9),
  femininePast: Word('завяла,завя'нула', 3),
  neuterPast: Word('завяло,завя'нуло', 3),
  pluralPast: Word('завяли,завя'нули', 3),
  imperativeInformal: Word('завянь', 3),
  imperativeFormal: Word('завяньте', 3),
  imperfect: ['вянуть'],
};

perfectVerbs.set(завянуть.name.text, завянуть);

export { завянуть };