import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const долженствовать: PerfectVerb = {
  name: Word('долженствовать', 11),
  singular1stPerson: Word('долженствую', 9),
  singular2ndPerson: Word('долженствуешь', 9),
  singular3rdPerson: Word('долженствует', 9),
  plural1stPerson: Word('долженствуем', 9),
  plural2ndPerson: Word('долженствуете', 9),
  plural3rdPerson: Word('долженствуют', 9),
  masculinePast: Word('долженствовал', 11),
  femininePast: Word('долженствовала', 11),
  neuterPast: Word('долженствовало', 11),
  pluralPast: Word('долженствовали', 11),
  imperativeInformal: Word('долженствуй', 9),
  imperativeFormal: Word('долженствуйте', 9),
  imperfect: [],
};

perfectVerbs.set(долженствовать.name.text, долженствовать);

export { долженствовать };