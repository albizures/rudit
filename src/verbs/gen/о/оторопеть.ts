import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оторопеть: PerfectVerb = {
  name: Word('оторопеть', 6),
  singular1stPerson: Word('оторопею', 6),
  singular2ndPerson: Word('оторопеешь', 6),
  singular3rdPerson: Word('оторопеет', 6),
  plural1stPerson: Word('оторопеем', 6),
  plural2ndPerson: Word('оторопеете', 6),
  plural3rdPerson: Word('оторопеют', 6),
  masculinePast: Word('оторопел', 6),
  femininePast: Word('оторопела', 6),
  neuterPast: Word('оторопело', 6),
  pluralPast: Word('оторопели', 6),
  imperativeInformal: Word('оторопей', 6),
  imperativeFormal: Word('оторопейте', 6),
  imperfect: [],
};

perfectVerbs.set(оторопеть.name.text, оторопеть);

export { оторопеть };