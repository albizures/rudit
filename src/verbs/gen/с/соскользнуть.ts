import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соскользнуть: PerfectVerb = {
  name: Word('соскользнуть', 9),
  singular1stPerson: Word('соскользну', 9),
  singular2ndPerson: Word('соскользнёшь', 9),
  singular3rdPerson: Word('соскользнёт', 9),
  plural1stPerson: Word('соскользнём', 9),
  plural2ndPerson: Word('соскользнёте', 9),
  plural3rdPerson: Word('соскользнут', 9),
  masculinePast: Word('соскользнул', 9),
  femininePast: Word('соскользнула', 9),
  neuterPast: Word('соскользнуло', 9),
  pluralPast: Word('соскользнули', 9),
  imperativeInformal: Word('соскользни', 9),
  imperativeFormal: Word('соскользните', 9),
  imperfect: [],
};

perfectVerbs.set(соскользнуть.name.text, соскользнуть);

export { соскользнуть };