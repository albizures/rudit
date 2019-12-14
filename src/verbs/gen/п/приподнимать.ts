import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приподнимать: PerfectVerb = {
  name: Word('приподнимать', 9),
  singular1stPerson: Word('приподнимаю', 9),
  singular2ndPerson: Word('приподнимаешь', 9),
  singular3rdPerson: Word('приподнимает', 9),
  plural1stPerson: Word('приподнимаем', 9),
  plural2ndPerson: Word('приподнимаете', 9),
  plural3rdPerson: Word('приподнимают', 9),
  masculinePast: Word('приподнимал', 9),
  femininePast: Word('приподнимала', 9),
  neuterPast: Word('приподнимало', 9),
  pluralPast: Word('приподнимали', 9),
  imperativeInformal: Word('приподнимай', 9),
  imperativeFormal: Word('приподнимайте', 9),
  imperfect: [],
};

perfectVerbs.set(приподнимать.name.text, приподнимать);

export { приподнимать };