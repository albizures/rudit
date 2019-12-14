import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const коченеть: PerfectVerb = {
  name: Word('коченеть', 5),
  singular1stPerson: Word('коченею', 5),
  singular2ndPerson: Word('коченеешь', 5),
  singular3rdPerson: Word('коченеет', 5),
  plural1stPerson: Word('коченеем', 5),
  plural2ndPerson: Word('коченеете', 5),
  plural3rdPerson: Word('коченеют', 5),
  masculinePast: Word('коченел', 5),
  femininePast: Word('коченела', 5),
  neuterPast: Word('коченело', 5),
  pluralPast: Word('коченели', 5),
  imperativeInformal: Word('коченей', 5),
  imperativeFormal: Word('коченейте', 5),
  imperfect: [],
};

perfectVerbs.set(коченеть.name.text, коченеть);

export { коченеть };