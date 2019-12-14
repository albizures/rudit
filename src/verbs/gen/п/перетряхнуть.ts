import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетряхнуть: PerfectVerb = {
  name: Word('перетряхнуть', 9),
  singular1stPerson: Word('перетряхну', 9),
  singular2ndPerson: Word('перетряхнёшь', 9),
  singular3rdPerson: Word('перетряхнёт', 9),
  plural1stPerson: Word('перетряхнём', 9),
  plural2ndPerson: Word('перетряхнёте', 9),
  plural3rdPerson: Word('перетряхнут', 9),
  masculinePast: Word('перетряхнул', 9),
  femininePast: Word('перетряхнула', 9),
  neuterPast: Word('перетряхнуло', 9),
  pluralPast: Word('перетряхнули', 9),
  imperativeInformal: Word('перетряхни', 9),
  imperativeFormal: Word('перетряхните', 9),
  imperfect: [],
};

perfectVerbs.set(перетряхнуть.name.text, перетряхнуть);

export { перетряхнуть };