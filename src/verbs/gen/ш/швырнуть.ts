import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const швырнуть: PerfectVerb = {
  name: Word('швырнуть', 5),
  singular1stPerson: Word('швырну', 5),
  singular2ndPerson: Word('швырнёшь', 5),
  singular3rdPerson: Word('швырнёт', 5),
  plural1stPerson: Word('швырнём', 5),
  plural2ndPerson: Word('швырнёте', 5),
  plural3rdPerson: Word('швырнут', 5),
  masculinePast: Word('швырнул', 5),
  femininePast: Word('швырнула', 5),
  neuterPast: Word('швырнуло', 5),
  pluralPast: Word('швырнули', 5),
  imperativeInformal: Word('швырни', 5),
  imperativeFormal: Word('швырните', 5),
  imperfect: [],
};

perfectVerbs.set(швырнуть.name.text, швырнуть);

export { швырнуть };