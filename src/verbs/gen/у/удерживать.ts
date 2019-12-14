import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удерживать: PerfectVerb = {
  name: Word('удерживать', 2),
  singular1stPerson: Word('удерживаю', 2),
  singular2ndPerson: Word('удерживаешь', 2),
  singular3rdPerson: Word('удерживает', 2),
  plural1stPerson: Word('удерживаем', 2),
  plural2ndPerson: Word('удерживаете', 2),
  plural3rdPerson: Word('удерживают', 2),
  masculinePast: Word('удерживал', 2),
  femininePast: Word('удерживала', 2),
  neuterPast: Word('удерживало', 2),
  pluralPast: Word('удерживали', 2),
  imperativeInformal: Word('удерживай', 2),
  imperativeFormal: Word('удерживайте', 2),
  imperfect: [],
};

perfectVerbs.set(удерживать.name.text, удерживать);

export { удерживать };