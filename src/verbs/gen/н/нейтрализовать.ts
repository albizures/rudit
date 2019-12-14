import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нейтрализовать: PerfectVerb = {
  name: Word('нейтрализовать', 11),
  singular1stPerson: Word('нейтрализую', 9),
  singular2ndPerson: Word('нейтрализуешь', 9),
  singular3rdPerson: Word('нейтрализует', 9),
  plural1stPerson: Word('нейтрализуем', 9),
  plural2ndPerson: Word('нейтрализуете', 9),
  plural3rdPerson: Word('нейтрализуют', 9),
  masculinePast: Word('нейтрализовал', 11),
  femininePast: Word('нейтрализовала', 11),
  neuterPast: Word('нейтрализовало', 11),
  pluralPast: Word('нейтрализовали', 11),
  imperativeInformal: Word('нейтрализуй', 9),
  imperativeFormal: Word('нейтрализуйте', 9),
  imperfect: [],
};

perfectVerbs.set(нейтрализовать.name.text, нейтрализовать);

export { нейтрализовать };