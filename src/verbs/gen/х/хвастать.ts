import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хвастать: PerfectVerb = {
  name: Word('хвастать', 2),
  singular1stPerson: Word('хвастаю', 2),
  singular2ndPerson: Word('хвастаешь', 2),
  singular3rdPerson: Word('хвастает', 2),
  plural1stPerson: Word('хвастаем', 2),
  plural2ndPerson: Word('хвастаете', 2),
  plural3rdPerson: Word('хвастают', 2),
  masculinePast: Word('хвастал', 2),
  femininePast: Word('хвастала', 2),
  neuterPast: Word('хвастало', 2),
  pluralPast: Word('хвастали', 2),
  imperativeInformal: Word('хвастай', 2),
  imperativeFormal: Word('хвастайте', 2),
  imperfect: [],
};

perfectVerbs.set(хвастать.name.text, хвастать);

export { хвастать };