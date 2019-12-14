import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выскользнуть: PerfectVerb = {
  name: Word('выскользнуть', 1),
  singular1stPerson: Word('выскользну', 1),
  singular2ndPerson: Word('выскользнешь', 1),
  singular3rdPerson: Word('выскользнет', 1),
  plural1stPerson: Word('выскользнем', 1),
  plural2ndPerson: Word('выскользнете', 1),
  plural3rdPerson: Word('выскользнут', 1),
  masculinePast: Word('выскользнул', 1),
  femininePast: Word('выскользнула', 1),
  neuterPast: Word('выскользнуло', 1),
  pluralPast: Word('выскользнули', 1),
  imperativeInformal: Word('выскользни', 1),
  imperativeFormal: Word('выскользните', 1),
  imperfect: [],
};

perfectVerbs.set(выскользнуть.name.text, выскользнуть);

export { выскользнуть };