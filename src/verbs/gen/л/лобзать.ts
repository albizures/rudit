import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лобзать: PerfectVerb = {
  name: Word('лобзать', 4),
  singular1stPerson: Word('лобзаю', 4),
  singular2ndPerson: Word('лобзаешь', 4),
  singular3rdPerson: Word('лобзает', 4),
  plural1stPerson: Word('лобзаем', 4),
  plural2ndPerson: Word('лобзаете', 4),
  plural3rdPerson: Word('лобзают', 4),
  masculinePast: Word('лобзал', 4),
  femininePast: Word('лобзала', 4),
  neuterPast: Word('лобзало', 4),
  pluralPast: Word('лобзали', 4),
  imperativeInformal: Word('лобзай', 4),
  imperativeFormal: Word('лобзайте', 4),
  imperfect: [],
};

perfectVerbs.set(лобзать.name.text, лобзать);

export { лобзать };