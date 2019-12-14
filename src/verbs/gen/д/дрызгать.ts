import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дрызгать: PerfectVerb = {
  name: Word('дрызгать', 2),
  singular1stPerson: Word('дрызгаю', 2),
  singular2ndPerson: Word('дрызгаешь', 2),
  singular3rdPerson: Word('дрызгает', 2),
  plural1stPerson: Word('дрызгаем', 2),
  plural2ndPerson: Word('дрызгаете', 2),
  plural3rdPerson: Word('дрызгают', 2),
  masculinePast: Word('дрызгал', 2),
  femininePast: Word('дрызгала', 2),
  neuterPast: Word('дрызгало', 2),
  pluralPast: Word('дрызгали', 2),
  imperativeInformal: Word('дрызгай', 2),
  imperativeFormal: Word('дрызгайте', 2),
  imperfect: [],
};

perfectVerbs.set(дрызгать.name.text, дрызгать);

export { дрызгать };