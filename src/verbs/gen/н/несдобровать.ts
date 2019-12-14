import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const несдобровать: PerfectVerb = {
  name: Word('несдобровать', 9),
  singular1stPerson: Word('несдобрую', 7),
  singular2ndPerson: Word('несдобруешь', 7),
  singular3rdPerson: Word('несдобрует', 7),
  plural1stPerson: Word('несдобруем', 7),
  plural2ndPerson: Word('несдобруете', 7),
  plural3rdPerson: Word('несдобруют', 7),
  masculinePast: Word('несдобровал', 9),
  femininePast: Word('несдобровала', 9),
  neuterPast: Word('несдобровало', 9),
  pluralPast: Word('несдобровали', 9),
  imperativeInformal: Word('несдобруй', 7),
  imperativeFormal: Word('несдобруйте', 7),
  imperfect: [],
};

perfectVerbs.set(несдобровать.name.text, несдобровать);

export { несдобровать };