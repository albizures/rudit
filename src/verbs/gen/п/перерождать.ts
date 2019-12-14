import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перерождать: PerfectVerb = {
  name: Word('перерождать', 8),
  singular1stPerson: Word('перерождаю', 8),
  singular2ndPerson: Word('перерождаешь', 8),
  singular3rdPerson: Word('перерождает', 8),
  plural1stPerson: Word('перерождаем', 8),
  plural2ndPerson: Word('перерождаете', 8),
  plural3rdPerson: Word('перерождают', 8),
  masculinePast: Word('перерождал', 8),
  femininePast: Word('перерождала', 8),
  neuterPast: Word('перерождало', 8),
  pluralPast: Word('перерождали', 8),
  imperativeInformal: Word('перерождай', 8),
  imperativeFormal: Word('перерождайте', 8),
  imperfect: [],
};

perfectVerbs.set(перерождать.name.text, перерождать);

export { перерождать };