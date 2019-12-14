import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмахнуть: PerfectVerb = {
  name: Word('отмахнуть', 6),
  singular1stPerson: Word('отмахну', 6),
  singular2ndPerson: Word('отмахнёшь', 3),
  singular3rdPerson: Word('отмахнёт', 3),
  plural1stPerson: Word('отмахнём', 3),
  plural2ndPerson: Word('отмахнёте', 3),
  plural3rdPerson: Word('отмахнут', 6),
  masculinePast: Word('отмахнул', 6),
  femininePast: Word('отмахнула', 6),
  neuterPast: Word('отмахнуло', 6),
  pluralPast: Word('отмахнули', 6),
  imperativeInformal: Word('отмахни', 6),
  imperativeFormal: Word('отмахните', 6),
  imperfect: [],
};

perfectVerbs.set(отмахнуть.name.text, отмахнуть);

export { отмахнуть };