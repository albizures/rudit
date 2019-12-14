import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растерзать: PerfectVerb = {
  name: Word('растерзать', 7),
  singular1stPerson: Word('растерзаю', 7),
  singular2ndPerson: Word('растерзаешь', 7),
  singular3rdPerson: Word('растерзает', 7),
  plural1stPerson: Word('растерзаем', 7),
  plural2ndPerson: Word('растерзаете', 7),
  plural3rdPerson: Word('растерзают', 7),
  masculinePast: Word('растерзал', 7),
  femininePast: Word('растерзала', 7),
  neuterPast: Word('растерзало', 7),
  pluralPast: Word('растерзали', 7),
  imperativeInformal: Word('растерзай', 7),
  imperativeFormal: Word('растерзайте', 7),
  imperfect: [],
};

perfectVerbs.set(растерзать.name.text, растерзать);

export { растерзать };