import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скользнуть: PerfectVerb = {
  name: Word('скользнуть', 7),
  singular1stPerson: Word('скользну', 7),
  singular2ndPerson: Word('скользнёшь', 2),
  singular3rdPerson: Word('скользнёт', 2),
  plural1stPerson: Word('скользнём', 2),
  plural2ndPerson: Word('скользнёте', 9),
  plural3rdPerson: Word('скользнут', 7),
  masculinePast: Word('скользнул', 7),
  femininePast: Word('скользнула', 7),
  neuterPast: Word('скользнуло', 7),
  pluralPast: Word('скользнули', 7),
  imperativeInformal: Word('скользни', 7),
  imperativeFormal: Word('скользните', 7),
  imperfect: [],
};

perfectVerbs.set(скользнуть.name.text, скользнуть);

export { скользнуть };