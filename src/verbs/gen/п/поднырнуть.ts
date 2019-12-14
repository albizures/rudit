import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поднырнуть: PerfectVerb = {
  name: Word('поднырнуть', 7),
  singular1stPerson: Word('поднырну', 7),
  singular2ndPerson: Word('поднырнёшь', 7),
  singular3rdPerson: Word('поднырнёт', 7),
  plural1stPerson: Word('поднырнём', 7),
  plural2ndPerson: Word('поднырнёте', 7),
  plural3rdPerson: Word('поднырнут', 7),
  masculinePast: Word('поднырнул', 7),
  femininePast: Word('поднырнула', 7),
  neuterPast: Word('поднырнуло', 7),
  pluralPast: Word('поднырнули', 7),
  imperativeInformal: Word('поднырни', 7),
  imperativeFormal: Word('поднырните', 7),
  imperfect: [],
};

perfectVerbs.set(поднырнуть.name.text, поднырнуть);

export { поднырнуть };