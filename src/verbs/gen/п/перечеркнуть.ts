import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перечеркнуть: PerfectVerb = {
  name: Word('перечеркнуть', 9),
  singular1stPerson: Word('перечеркну', 9),
  singular2ndPerson: Word('перечеркнёшь', 1),
  singular3rdPerson: Word('перечеркнёт', 1),
  plural1stPerson: Word('перечеркнём', 1),
  plural2ndPerson: Word('перечеркнёте', 1),
  plural3rdPerson: Word('перечеркнут', 9),
  masculinePast: Word('перечеркнул', 9),
  femininePast: Word('перечеркнула', 9),
  neuterPast: Word('перечеркнуло', 9),
  pluralPast: Word('перечеркнули', 9),
  imperativeInformal: Word('перечеркни', 9),
  imperativeFormal: Word('перечеркните', 9),
  imperfect: [],
};

perfectVerbs.set(перечеркнуть.name.text, перечеркнуть);

export { перечеркнуть };