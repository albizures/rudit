import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отглотнуть: PerfectVerb = {
  name: Word('отглотнуть', 7),
  singular1stPerson: Word('отглотну', 7),
  singular2ndPerson: Word('отглотнёшь', 7),
  singular3rdPerson: Word('отглотнёт', 7),
  plural1stPerson: Word('отглотнём', 7),
  plural2ndPerson: Word('отглотнёте', 7),
  plural3rdPerson: Word('отглотнут', 7),
  masculinePast: Word('отглотнул', 7),
  femininePast: Word('отглотнула', 7),
  neuterPast: Word('отглотнуло', 7),
  pluralPast: Word('отглотнули', 7),
  imperativeInformal: Word('отглотни', 7),
  imperativeFormal: Word('отглотните', 7),
  imperfect: [],
};

perfectVerbs.set(отглотнуть.name.text, отглотнуть);

export { отглотнуть };