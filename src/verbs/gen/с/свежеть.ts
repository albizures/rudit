import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свежеть: PerfectVerb = {
  name: Word('свежеть', 4),
  singular1stPerson: Word('свежею', 4),
  singular2ndPerson: Word('свежеешь', 4),
  singular3rdPerson: Word('свежеет', 4),
  plural1stPerson: Word('свежеем', 4),
  plural2ndPerson: Word('свежеете', 4),
  plural3rdPerson: Word('свежеют', 4),
  masculinePast: Word('свежел', 4),
  femininePast: Word('свежела', 4),
  neuterPast: Word('свежело', 4),
  pluralPast: Word('свежели', 4),
  imperativeInformal: Word('свежей', 4),
  imperativeFormal: Word('свежейте', 4),
  imperfect: [],
};

perfectVerbs.set(свежеть.name.text, свежеть);

export { свежеть };