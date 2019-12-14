import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вывернуть: PerfectVerb = {
  name: Word('вывернуть', 1),
  singular1stPerson: Word('выверну', 1),
  singular2ndPerson: Word('вывернешь', 1),
  singular3rdPerson: Word('вывернет', 1),
  plural1stPerson: Word('вывернем', 1),
  plural2ndPerson: Word('вывернете', 1),
  plural3rdPerson: Word('вывернут', 1),
  masculinePast: Word('вывернул', 1),
  femininePast: Word('вывернула', 1),
  neuterPast: Word('вывернуло', 1),
  pluralPast: Word('вывернули', 1),
  imperativeInformal: Word('выверни', 1),
  imperativeFormal: Word('выверните', 1),
  imperfect: [],
};

perfectVerbs.set(вывернуть.name.text, вывернуть);

export { вывернуть };