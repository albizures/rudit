import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспринимать: PerfectVerb = {
  name: Word('воспринимать', 9),
  singular1stPerson: Word('воспринимаю', 9),
  singular2ndPerson: Word('воспринимаешь', 9),
  singular3rdPerson: Word('воспринимает', 9),
  plural1stPerson: Word('воспринимаем', 9),
  plural2ndPerson: Word('воспринимаете', 9),
  plural3rdPerson: Word('воспринимают', 9),
  masculinePast: Word('воспринимал', 9),
  femininePast: Word('воспринимала', 9),
  neuterPast: Word('воспринимало', 9),
  pluralPast: Word('воспринимали', 9),
  imperativeInformal: Word('воспринимай', 9),
  imperativeFormal: Word('воспринимайте', 9),
  imperfect: ['воспринять'],
};

perfectVerbs.set(воспринимать.name.text, воспринимать);

export { воспринимать };