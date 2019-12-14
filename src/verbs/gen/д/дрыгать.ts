import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дрыгать: PerfectVerb = {
  name: Word('дрыгать', 2),
  singular1stPerson: Word('дрыгаю', 2),
  singular2ndPerson: Word('дрыгаешь', 2),
  singular3rdPerson: Word('дрыгает', 2),
  plural1stPerson: Word('дрыгаем', 2),
  plural2ndPerson: Word('дрыгаете', 2),
  plural3rdPerson: Word('дрыгают', 2),
  masculinePast: Word('дрыгал', 2),
  femininePast: Word('дрыгала', 2),
  neuterPast: Word('дрыгало', 2),
  pluralPast: Word('дрыгали', 2),
  imperativeInformal: Word('дрыгай', 2),
  imperativeFormal: Word('дрыгайте', 2),
  imperfect: [],
};

perfectVerbs.set(дрыгать.name.text, дрыгать);

export { дрыгать };