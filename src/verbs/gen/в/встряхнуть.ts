import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const встряхнуть: PerfectVerb = {
  name: Word('встряхнуть', 7),
  singular1stPerson: Word('встряхну', 7),
  singular2ndPerson: Word('встряхнёшь', 4),
  singular3rdPerson: Word('встряхнёт', 4),
  plural1stPerson: Word('встряхнём', 4),
  plural2ndPerson: Word('встряхнёте', 9),
  plural3rdPerson: Word('встряхнут', 7),
  masculinePast: Word('встряхнул', 7),
  femininePast: Word('встряхнула', 7),
  neuterPast: Word('встряхнуло', 7),
  pluralPast: Word('встряхнули', 7),
  imperativeInformal: Word('встряхни', 7),
  imperativeFormal: Word('встряхните', 7),
  imperfect: [],
};

perfectVerbs.set(встряхнуть.name.text, встряхнуть);

export { встряхнуть };