import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начинать: PerfectVerb = {
  name: Word('начинать', 5),
  singular1stPerson: Word('начинаю', 5),
  singular2ndPerson: Word('начинаешь', 5),
  singular3rdPerson: Word('начинает', 5),
  plural1stPerson: Word('начинаем', 5),
  plural2ndPerson: Word('начинаете', 5),
  plural3rdPerson: Word('начинают', 5),
  masculinePast: Word('начинал', 5),
  femininePast: Word('начинала', 5),
  neuterPast: Word('начинало', 5),
  pluralPast: Word('начинали', 5),
  imperativeInformal: Word('начинай', 5),
  imperativeFormal: Word('начинайте', 5),
  imperfect: ['начать'],
};

perfectVerbs.set(начинать.name.text, начинать);

export { начинать };