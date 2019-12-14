import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припугнуть: PerfectVerb = {
  name: Word('припугнуть', 7),
  singular1stPerson: Word('припугну', 7),
  singular2ndPerson: Word('припугнёшь', 7),
  singular3rdPerson: Word('припугнёт', 7),
  plural1stPerson: Word('припугнём', 7),
  plural2ndPerson: Word('припугнёте', 7),
  plural3rdPerson: Word('припугнут', 7),
  masculinePast: Word('припугнул', 7),
  femininePast: Word('припугнула', 7),
  neuterPast: Word('припугнуло', 7),
  pluralPast: Word('припугнули', 7),
  imperativeInformal: Word('припугни', 7),
  imperativeFormal: Word('припугните', 7),
  imperfect: [],
};

perfectVerbs.set(припугнуть.name.text, припугнуть);

export { припугнуть };