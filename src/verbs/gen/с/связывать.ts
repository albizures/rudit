import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const связывать: PerfectVerb = {
  name: Word('связывать', 2),
  singular1stPerson: Word('связываю', 2),
  singular2ndPerson: Word('связываешь', 2),
  singular3rdPerson: Word('связывает', 2),
  plural1stPerson: Word('связываем', 2),
  plural2ndPerson: Word('связываете', 2),
  plural3rdPerson: Word('связывают', 2),
  masculinePast: Word('связывал', 2),
  femininePast: Word('связывала', 2),
  neuterPast: Word('связывало', 2),
  pluralPast: Word('связывали', 2),
  imperativeInformal: Word('связывай', 2),
  imperativeFormal: Word('связывайте', 2),
  imperfect: ['связать'],
};

perfectVerbs.set(связывать.name.text, связывать);

export { связывать };