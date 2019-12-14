import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отхлебнуть: PerfectVerb = {
  name: Word('отхлебнуть', 7),
  singular1stPerson: Word('отхлебну', 7),
  singular2ndPerson: Word('отхлебнёшь', 7),
  singular3rdPerson: Word('отхлебнёт', 7),
  plural1stPerson: Word('отхлебнём', 7),
  plural2ndPerson: Word('отхлебнёте', 7),
  plural3rdPerson: Word('отхлебнут', 7),
  masculinePast: Word('отхлебнул', 7),
  femininePast: Word('отхлебнула', 7),
  neuterPast: Word('отхлебнуло', 7),
  pluralPast: Word('отхлебнули', 7),
  imperativeInformal: Word('отхлебни', 7),
  imperativeFormal: Word('отхлебните', 7),
  imperfect: [],
};

perfectVerbs.set(отхлебнуть.name.text, отхлебнуть);

export { отхлебнуть };