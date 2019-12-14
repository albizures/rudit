import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашвырнуть: PerfectVerb = {
  name: Word('зашвырнуть', 7),
  singular1stPerson: Word('зашвырну', 7),
  singular2ndPerson: Word('зашвырнёшь', 7),
  singular3rdPerson: Word('зашвырнёт', 7),
  plural1stPerson: Word('зашвырнём', 7),
  plural2ndPerson: Word('зашвырнёте', 7),
  plural3rdPerson: Word('зашвырнут', 7),
  masculinePast: Word('зашвырнул', 7),
  femininePast: Word('зашвырнула', 7),
  neuterPast: Word('зашвырнуло', 7),
  pluralPast: Word('зашвырнули', 7),
  imperativeInformal: Word('зашвырни', 7),
  imperativeFormal: Word('зашвырните', 7),
  imperfect: [],
};

perfectVerbs.set(зашвырнуть.name.text, зашвырнуть);

export { зашвырнуть };