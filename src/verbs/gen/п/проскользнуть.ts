import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проскользнуть: PerfectVerb = {
  name: Word('проскользнуть', 10),
  singular1stPerson: Word('проскользну', 10),
  singular2ndPerson: Word('проскользнёшь', 10),
  singular3rdPerson: Word('проскользнёт', 10),
  plural1stPerson: Word('проскользнём', 10),
  plural2ndPerson: Word('проскользнёте', 10),
  plural3rdPerson: Word('проскользнут', 10),
  masculinePast: Word('проскользнул', 10),
  femininePast: Word('проскользнула', 10),
  neuterPast: Word('проскользнуло', 10),
  pluralPast: Word('проскользнули', 10),
  imperativeInformal: Word('проскользни', 10),
  imperativeFormal: Word('проскользните', 10),
  imperfect: [],
};

perfectVerbs.set(проскользнуть.name.text, проскользнуть);

export { проскользнуть };