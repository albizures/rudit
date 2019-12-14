import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const легализовать: PerfectVerb = {
  name: Word('легализовать', 9),
  singular1stPerson: Word('легализую', 7),
  singular2ndPerson: Word('легализуешь', 7),
  singular3rdPerson: Word('легализует', 7),
  plural1stPerson: Word('легализуем', 7),
  plural2ndPerson: Word('легализуете', 7),
  plural3rdPerson: Word('легализуют', 7),
  masculinePast: Word('легализовал', 9),
  femininePast: Word('легализовала', 9),
  neuterPast: Word('легализовало', 9),
  pluralPast: Word('легализовали', 9),
  imperativeInformal: Word('легализуй', 7),
  imperativeFormal: Word('легализуйте', 7),
  imperfect: [],
};

perfectVerbs.set(легализовать.name.text, легализовать);

export { легализовать };