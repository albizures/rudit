import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const купать: PerfectVerb = {
  name: Word('купать', 3),
  singular1stPerson: Word('купаю', 3),
  singular2ndPerson: Word('купаешь', 3),
  singular3rdPerson: Word('купает', 3),
  plural1stPerson: Word('купаем', 3),
  plural2ndPerson: Word('купаете', 3),
  plural3rdPerson: Word('купают', 3),
  masculinePast: Word('купал', 3),
  femininePast: Word('купала', 3),
  neuterPast: Word('купало', 3),
  pluralPast: Word('купали', 3),
  imperativeInformal: Word('купай', 3),
  imperativeFormal: Word('купайте', 3),
  imperfect: ['искупать','выкупать'],
};

perfectVerbs.set(купать.name.text, купать);

export { купать };