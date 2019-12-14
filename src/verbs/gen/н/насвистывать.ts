import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насвистывать: PerfectVerb = {
  name: Word('насвистывать', 4),
  singular1stPerson: Word('насвистываю', 4),
  singular2ndPerson: Word('насвистываешь', 4),
  singular3rdPerson: Word('насвистывает', 4),
  plural1stPerson: Word('насвистываем', 4),
  plural2ndPerson: Word('насвистываете', 4),
  plural3rdPerson: Word('насвистывают', 4),
  masculinePast: Word('насвистывал', 4),
  femininePast: Word('насвистывала', 4),
  neuterPast: Word('насвистывало', 4),
  pluralPast: Word('насвистывали', 4),
  imperativeInformal: Word('насвистывай', 4),
  imperativeFormal: Word('насвистывайте', 4),
  imperfect: [],
};

perfectVerbs.set(насвистывать.name.text, насвистывать);

export { насвистывать };