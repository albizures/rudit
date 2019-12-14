import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похолодеть: PerfectVerb = {
  name: Word('похолодеть', 7),
  singular1stPerson: Word('похолодею', 7),
  singular2ndPerson: Word('похолодеешь', 7),
  singular3rdPerson: Word('похолодеет', 7),
  plural1stPerson: Word('похолодеем', 7),
  plural2ndPerson: Word('похолодеете', 7),
  plural3rdPerson: Word('похолодеют', 7),
  masculinePast: Word('похолодел', 7),
  femininePast: Word('похолодела', 7),
  neuterPast: Word('похолодело', 7),
  pluralPast: Word('похолодели', 7),
  imperativeInformal: Word('похолодей', 7),
  imperativeFormal: Word('похолодейте', 7),
  imperfect: [],
};

perfectVerbs.set(похолодеть.name.text, похолодеть);

export { похолодеть };