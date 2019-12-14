import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дорастать: PerfectVerb = {
  name: Word('дорастать', 6),
  singular1stPerson: Word('дорастаю', 6),
  singular2ndPerson: Word('дорастаешь', 6),
  singular3rdPerson: Word('дорастает', 6),
  plural1stPerson: Word('дорастаем', 6),
  plural2ndPerson: Word('дорастаете', 6),
  plural3rdPerson: Word('дорастают', 6),
  masculinePast: Word('дорастал', 6),
  femininePast: Word('дорастала', 6),
  neuterPast: Word('дорастало', 6),
  pluralPast: Word('дорастали', 6),
  imperativeInformal: Word('дорастай', 6),
  imperativeFormal: Word('дорастайте', 6),
  imperfect: [],
};

perfectVerbs.set(дорастать.name.text, дорастать);

export { дорастать };