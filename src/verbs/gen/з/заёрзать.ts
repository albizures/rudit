import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заёрзать: PerfectVerb = {
  name: Word('заёрзать', 1),
  singular1stPerson: Word('заёрзаю', 1),
  singular2ndPerson: Word('заёрзаешь', 1),
  singular3rdPerson: Word('заёрзает', 1),
  plural1stPerson: Word('заёрзаем', 1),
  plural2ndPerson: Word('заёрзаете', 1),
  plural3rdPerson: Word('заёрзают', 1),
  masculinePast: Word('заёрзал', 1),
  femininePast: Word('заёрзала', 1),
  neuterPast: Word('заёрзало', 1),
  pluralPast: Word('заёрзали', 1),
  imperativeInformal: Word('заёрзай', 1),
  imperativeFormal: Word('заёрзайте', 1),
  imperfect: [],
};

perfectVerbs.set(заёрзать.name.text, заёрзать);

export { заёрзать };