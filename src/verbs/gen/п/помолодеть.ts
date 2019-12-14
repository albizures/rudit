import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помолодеть: PerfectVerb = {
  name: Word('помолодеть', 7),
  singular1stPerson: Word('помолодею', 7),
  singular2ndPerson: Word('помолодеешь', 7),
  singular3rdPerson: Word('помолодеет', 7),
  plural1stPerson: Word('помолодеем', 7),
  plural2ndPerson: Word('помолодеете', 7),
  plural3rdPerson: Word('помолодеют', 7),
  masculinePast: Word('помолодел', 7),
  femininePast: Word('помолодела', 7),
  neuterPast: Word('помолодело', 7),
  pluralPast: Word('помолодели', 7),
  imperativeInformal: Word('помолодей', 7),
  imperativeFormal: Word('помолодейте', 7),
  imperfect: [],
};

perfectVerbs.set(помолодеть.name.text, помолодеть);

export { помолодеть };