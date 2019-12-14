import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ёрзать: PerfectVerb = {
  name: Word('ёрзать', 0),
  singular1stPerson: Word('ёрзаю', 0),
  singular2ndPerson: Word('ёрзаешь', 0),
  singular3rdPerson: Word('ёрзает', 0),
  plural1stPerson: Word('ёрзаем', 0),
  plural2ndPerson: Word('ёрзаете', 0),
  plural3rdPerson: Word('ёрзают', 0),
  masculinePast: Word('ёрзал', 0),
  femininePast: Word('ёрзала', 0),
  neuterPast: Word('ёрзало', 0),
  pluralPast: Word('ёрзали', 0),
  imperativeInformal: Word('ёрзай', 0),
  imperativeFormal: Word('ёрзайте', 0),
  imperfect: ['заёрзать','поёрзать','ёрзнуть'],
};

perfectVerbs.set(ёрзать.name.text, ёрзать);

export { ёрзать };