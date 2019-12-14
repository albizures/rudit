import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const страховать: PerfectVerb = {
  name: Word('страховать', 7),
  singular1stPerson: Word('страхую', 5),
  singular2ndPerson: Word('страхуешь', 5),
  singular3rdPerson: Word('страхует', 5),
  plural1stPerson: Word('страхуем', 5),
  plural2ndPerson: Word('страхуете', 5),
  plural3rdPerson: Word('страхуют', 5),
  masculinePast: Word('страховал', 7),
  femininePast: Word('страховала', 7),
  neuterPast: Word('страховало', 7),
  pluralPast: Word('страховали', 7),
  imperativeInformal: Word('страхуй', 5),
  imperativeFormal: Word('страхуйте', 5),
  imperfect: [],
};

perfectVerbs.set(страховать.name.text, страховать);

export { страховать };