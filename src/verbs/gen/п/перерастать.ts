import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перерастать: PerfectVerb = {
  name: Word('перерастать', 8),
  singular1stPerson: Word('перерастаю', 8),
  singular2ndPerson: Word('перерастаешь', 8),
  singular3rdPerson: Word('перерастает', 8),
  plural1stPerson: Word('перерастаем', 8),
  plural2ndPerson: Word('перерастаете', 8),
  plural3rdPerson: Word('перерастают', 8),
  masculinePast: Word('перерастал', 8),
  femininePast: Word('перерастала', 8),
  neuterPast: Word('перерастало', 8),
  pluralPast: Word('перерастали', 8),
  imperativeInformal: Word('перерастай', 8),
  imperativeFormal: Word('перерастайте', 8),
  imperfect: [],
};

perfectVerbs.set(перерастать.name.text, перерастать);

export { перерастать };