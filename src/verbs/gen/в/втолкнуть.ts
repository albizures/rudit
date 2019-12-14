import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втолкнуть: PerfectVerb = {
  name: Word('втолкнуть', 6),
  singular1stPerson: Word('втолкну', 6),
  singular2ndPerson: Word('втолкнёшь', 6),
  singular3rdPerson: Word('втолкнёт', 6),
  plural1stPerson: Word('втолкнём', 6),
  plural2ndPerson: Word('втолкнёте', 6),
  plural3rdPerson: Word('втолкнут', 6),
  masculinePast: Word('втолкнул', 6),
  femininePast: Word('втолкнула', 6),
  neuterPast: Word('втолкнуло', 6),
  pluralPast: Word('втолкнули', 6),
  imperativeInformal: Word('втолкни', 6),
  imperativeFormal: Word('втолкните', 6),
  imperfect: [],
};

perfectVerbs.set(втолкнуть.name.text, втолкнуть);

export { втолкнуть };