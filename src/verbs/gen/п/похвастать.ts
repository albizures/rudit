import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похвастать: PerfectVerb = {
  name: Word('похвастать', 4),
  singular1stPerson: Word('похвастаю', 4),
  singular2ndPerson: Word('похвастаешь', 4),
  singular3rdPerson: Word('похвастает', 4),
  plural1stPerson: Word('похвастаем', 4),
  plural2ndPerson: Word('похвастаете', 4),
  plural3rdPerson: Word('похвастают', 4),
  masculinePast: Word('похвастал', 4),
  femininePast: Word('похвастала', 4),
  neuterPast: Word('похвастало', 4),
  pluralPast: Word('похвастали', 4),
  imperativeInformal: Word('похвастай', 4),
  imperativeFormal: Word('похвастайте', 4),
  imperfect: [],
};

perfectVerbs.set(похвастать.name.text, похвастать);

export { похвастать };