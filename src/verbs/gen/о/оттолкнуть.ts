import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттолкнуть: PerfectVerb = {
  name: Word('оттолкнуть', 7),
  singular1stPerson: Word('оттолкну', 7),
  singular2ndPerson: Word('оттолкнёшь', 7),
  singular3rdPerson: Word('оттолкнёт', 7),
  plural1stPerson: Word('оттолкнём', 7),
  plural2ndPerson: Word('оттолкнёте', 7),
  plural3rdPerson: Word('оттолкнут', 7),
  masculinePast: Word('оттолкнул', 7),
  femininePast: Word('оттолкнула', 7),
  neuterPast: Word('оттолкнуло', 7),
  pluralPast: Word('оттолкнули', 7),
  imperativeInformal: Word('оттолкни', 7),
  imperativeFormal: Word('оттолкните', 7),
  imperfect: [],
};

perfectVerbs.set(оттолкнуть.name.text, оттолкнуть);

export { оттолкнуть };