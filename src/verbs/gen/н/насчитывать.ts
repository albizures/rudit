import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насчитывать: PerfectVerb = {
  name: Word('насчитывать', 4),
  singular1stPerson: Word('насчитываю', 4),
  singular2ndPerson: Word('насчитываешь', 4),
  singular3rdPerson: Word('насчитывает', 4),
  plural1stPerson: Word('насчитываем', 4),
  plural2ndPerson: Word('насчитываете', 4),
  plural3rdPerson: Word('насчитывают', 4),
  masculinePast: Word('насчитывал', 4),
  femininePast: Word('насчитывала', 4),
  neuterPast: Word('насчитывало', 4),
  pluralPast: Word('насчитывали', 4),
  imperativeInformal: Word('насчитывай', 4),
  imperativeFormal: Word('насчитывайте', 4),
  imperfect: ['насчитать'],
};

perfectVerbs.set(насчитывать.name.text, насчитывать);

export { насчитывать };