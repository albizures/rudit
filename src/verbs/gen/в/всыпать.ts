import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всыпать: PerfectVerb = {
  name: Word('всыпать', 4),
  singular1stPerson: Word('всыпаю', 4),
  singular2ndPerson: Word('всыпаешь', 4),
  singular3rdPerson: Word('всыпает', 4),
  plural1stPerson: Word('всыпаем', 4),
  plural2ndPerson: Word('всыпаете', 4),
  plural3rdPerson: Word('всыпают', 4),
  masculinePast: Word('всыпал', 4),
  femininePast: Word('всыпала', 4),
  neuterPast: Word('всыпало', 4),
  pluralPast: Word('всыпали', 4),
  imperativeInformal: Word('всыпай', 4),
  imperativeFormal: Word('всыпайте', 4),
  imperfect: [],
};

perfectVerbs.set(всыпать.name.text, всыпать);

export { всыпать };