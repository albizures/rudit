import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переделывать: PerfectVerb = {
  name: Word('переделывать', 5),
  singular1stPerson: Word('переделываю', 5),
  singular2ndPerson: Word('переделываешь', 5),
  singular3rdPerson: Word('переделывает', 5),
  plural1stPerson: Word('переделываем', 5),
  plural2ndPerson: Word('переделываете', 5),
  plural3rdPerson: Word('переделывают', 5),
  masculinePast: Word('переделывал', 5),
  femininePast: Word('переделывала', 5),
  neuterPast: Word('переделывало', 5),
  pluralPast: Word('переделывали', 5),
  imperativeInformal: Word('переделывай', 5),
  imperativeFormal: Word('переделывайте', 5),
  imperfect: ['переделать'],
};

perfectVerbs.set(переделывать.name.text, переделывать);

export { переделывать };