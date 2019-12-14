import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ёрзать: PerfectVerb = {
  name: Word('ёрзать', 3),
  singular1stPerson: Word('ёрзаю', 3),
  singular2ndPerson: Word('ёрзаешь', 3),
  singular3rdPerson: Word('ёрзает', 3),
  plural1stPerson: Word('ёрзаем', 3),
  plural2ndPerson: Word('ёрзаете', 3),
  plural3rdPerson: Word('ёрзают', 3),
  masculinePast: Word('ёрзал', 3),
  femininePast: Word('ёрзала', 3),
  neuterPast: Word('ёрзало', 3),
  pluralPast: Word('ёрзали', 3),
  imperativeInformal: Word('ёрзай', 3),
  imperativeFormal: Word('ёрзайте', 3),
  imperfect: ['заёрзать','поёрзать','ёрзнуть'],
};

perfectVerbs.set(ёрзать.name.text, ёрзать);

export { ёрзать };