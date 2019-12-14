import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переплывать: PerfectVerb = {
  name: Word('переплывать', 8),
  singular1stPerson: Word('переплываю', 8),
  singular2ndPerson: Word('переплываешь', 8),
  singular3rdPerson: Word('переплывает', 8),
  plural1stPerson: Word('переплываем', 8),
  plural2ndPerson: Word('переплываете', 8),
  plural3rdPerson: Word('переплывают', 8),
  masculinePast: Word('переплывал', 8),
  femininePast: Word('переплывала', 8),
  neuterPast: Word('переплывало', 8),
  pluralPast: Word('переплывали', 8),
  imperativeInformal: Word('переплывай', 8),
  imperativeFormal: Word('переплывайте', 8),
  imperfect: [],
};

perfectVerbs.set(переплывать.name.text, переплывать);

export { переплывать };