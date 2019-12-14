import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const децентрализовать: PerfectVerb = {
  name: Word('децентрализовать', 13),
  singular1stPerson: Word('децентрализую', 11),
  singular2ndPerson: Word('децентрализуешь', 11),
  singular3rdPerson: Word('децентрализует', 11),
  plural1stPerson: Word('децентрализуем', 11),
  plural2ndPerson: Word('децентрализуете', 11),
  plural3rdPerson: Word('децентрализуют', 11),
  masculinePast: Word('децентрализовал', 13),
  femininePast: Word('децентрализовала', 13),
  neuterPast: Word('децентрализовало', 13),
  pluralPast: Word('децентрализовали', 13),
  imperativeInformal: Word('децентрализуй', 11),
  imperativeFormal: Word('децентрализуйте', 11),
  imperfect: [],
};

perfectVerbs.set(децентрализовать.name.text, децентрализовать);

export { децентрализовать };