import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заёрзать: PerfectVerb = {
  name: Word('заёрзать', 2),
  singular1stPerson: Word('заёрзаю', 2),
  singular2ndPerson: Word('заёрзаешь', 2),
  singular3rdPerson: Word('заёрзает', 2),
  plural1stPerson: Word('заёрзаем', 2),
  plural2ndPerson: Word('заёрзаете', 2),
  plural3rdPerson: Word('заёрзают', 2),
  masculinePast: Word('заёрзал', 2),
  femininePast: Word('заёрзала', 2),
  neuterPast: Word('заёрзало', 2),
  pluralPast: Word('заёрзали', 2),
  imperativeInformal: Word('заёрзай', 2),
  imperativeFormal: Word('заёрзайте', 2),
  imperfect: [],
};

perfectVerbs.set(заёрзать.name.text, заёрзать);

export { заёрзать };