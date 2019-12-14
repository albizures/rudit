import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вянуть: PerfectVerb = {
  name: Word('вянуть', 1),
  singular1stPerson: Word('вяну', 1),
  singular2ndPerson: Word('вянешь', 1),
  singular3rdPerson: Word('вянет', 1),
  plural1stPerson: Word('вянем', 1),
  plural2ndPerson: Word('вянете', 1),
  plural3rdPerson: Word('вянут', 1),
  masculinePast: Word('вял,вянул', 5),
  femininePast: Word('вяла,вя'нула', 1),
  neuterPast: Word('вяло,вя'нуло', 1),
  pluralPast: Word('вяли,вя'нули', 1),
  imperativeInformal: Word('вянь', 1),
  imperativeFormal: Word('вяньте', 1),
  imperfect: ['завянуть','увянуть'],
};

perfectVerbs.set(вянуть.name.text, вянуть);

export { вянуть };