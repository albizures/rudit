import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тяготеть: PerfectVerb = {
  name: Word('тяготеть', 5),
  singular1stPerson: Word('тяготею', 5),
  singular2ndPerson: Word('тяготеешь', 5),
  singular3rdPerson: Word('тяготеет', 5),
  plural1stPerson: Word('тяготеем', 5),
  plural2ndPerson: Word('тяготеете', 5),
  plural3rdPerson: Word('тяготеют', 5),
  masculinePast: Word('тяготел', 5),
  femininePast: Word('тяготела', 5),
  neuterPast: Word('тяготело', 5),
  pluralPast: Word('тяготели', 5),
  imperativeInformal: Word('тяготей', 5),
  imperativeFormal: Word('тяготейте', 5),
  imperfect: [],
};

perfectVerbs.set(тяготеть.name.text, тяготеть);

export { тяготеть };