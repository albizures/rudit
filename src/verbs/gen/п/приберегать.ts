import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приберегать: PerfectVerb = {
  name: Word('приберегать', 8),
  singular1stPerson: Word('приберегаю', 8),
  singular2ndPerson: Word('приберегаешь', 8),
  singular3rdPerson: Word('приберегает', 8),
  plural1stPerson: Word('приберегаем', 8),
  plural2ndPerson: Word('приберегаете', 8),
  plural3rdPerson: Word('приберегают', 8),
  masculinePast: Word('приберегал', 8),
  femininePast: Word('приберегала', 8),
  neuterPast: Word('приберегало', 8),
  pluralPast: Word('приберегали', 8),
  imperativeInformal: Word('приберегай', 8),
  imperativeFormal: Word('приберегайте', 8),
  imperfect: [],
};

perfectVerbs.set(приберегать.name.text, приберегать);

export { приберегать };