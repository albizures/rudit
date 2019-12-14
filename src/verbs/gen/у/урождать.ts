import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const урождать: PerfectVerb = {
  name: Word('урождать', 5),
  singular1stPerson: Word('урождаю', 5),
  singular2ndPerson: Word('урождаешь', 5),
  singular3rdPerson: Word('урождает', 5),
  plural1stPerson: Word('урождаем', 5),
  plural2ndPerson: Word('урождаете', 5),
  plural3rdPerson: Word('урождают', 5),
  masculinePast: Word('урождал', 5),
  femininePast: Word('урождала', 5),
  neuterPast: Word('урождало', 5),
  pluralPast: Word('урождали', 5),
  imperativeInformal: Word('урождай', 5),
  imperativeFormal: Word('урождайте', 5),
  imperfect: [],
};

perfectVerbs.set(урождать.name.text, урождать);

export { урождать };