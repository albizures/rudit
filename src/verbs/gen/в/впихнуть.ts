import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впихнуть: PerfectVerb = {
  name: Word('впихнуть', 5),
  singular1stPerson: Word('впихну', 5),
  singular2ndPerson: Word('впихнёшь', 2),
  singular3rdPerson: Word('впихнёт', 2),
  plural1stPerson: Word('впихнём', 2),
  plural2ndPerson: Word('впихнёте', 7),
  plural3rdPerson: Word('впихнут', 5),
  masculinePast: Word('впихнул', 5),
  femininePast: Word('впихнула', 5),
  neuterPast: Word('впихнуло', 5),
  pluralPast: Word('впихнули', 5),
  imperativeInformal: Word('впихни', 5),
  imperativeFormal: Word('впихните', 5),
  imperfect: [],
};

perfectVerbs.set(впихнуть.name.text, впихнуть);

export { впихнуть };