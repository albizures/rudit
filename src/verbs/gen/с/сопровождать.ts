import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сопровождать: PerfectVerb = {
  name: Word('сопровождать', 9),
  singular1stPerson: Word('сопровождаю', 9),
  singular2ndPerson: Word('сопровождаешь', 9),
  singular3rdPerson: Word('сопровождает', 9),
  plural1stPerson: Word('сопровождаем', 9),
  plural2ndPerson: Word('сопровождаете', 9),
  plural3rdPerson: Word('сопровождают', 9),
  masculinePast: Word('сопровождал', 9),
  femininePast: Word('сопровождала', 9),
  neuterPast: Word('сопровождало', 9),
  pluralPast: Word('сопровождали', 9),
  imperativeInformal: Word('сопровождай', 9),
  imperativeFormal: Word('сопровождайте', 9),
  imperfect: ['сопроводить'],
};

perfectVerbs.set(сопровождать.name.text, сопровождать);

export { сопровождать };