import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угождать: PerfectVerb = {
  name: Word('угождать', 5),
  singular1stPerson: Word('угождаю', 5),
  singular2ndPerson: Word('угождаешь', 5),
  singular3rdPerson: Word('угождает', 5),
  plural1stPerson: Word('угождаем', 5),
  plural2ndPerson: Word('угождаете', 5),
  plural3rdPerson: Word('угождают', 5),
  masculinePast: Word('угождал', 5),
  femininePast: Word('угождала', 5),
  neuterPast: Word('угождало', 5),
  pluralPast: Word('угождали', 5),
  imperativeInformal: Word('угождай', 5),
  imperativeFormal: Word('угождайте', 5),
  imperfect: [],
};

perfectVerbs.set(угождать.name.text, угождать);

export { угождать };