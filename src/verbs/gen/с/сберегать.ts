import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сберегать: PerfectVerb = {
  name: Word('сберегать', 6),
  singular1stPerson: Word('сберегаю', 6),
  singular2ndPerson: Word('сберегаешь', 6),
  singular3rdPerson: Word('сберегает', 6),
  plural1stPerson: Word('сберегаем', 6),
  plural2ndPerson: Word('сберегаете', 6),
  plural3rdPerson: Word('сберегают', 6),
  masculinePast: Word('сберегал', 6),
  femininePast: Word('сберегала', 6),
  neuterPast: Word('сберегало', 6),
  pluralPast: Word('сберегали', 6),
  imperativeInformal: Word('сберегай', 6),
  imperativeFormal: Word('сберегайте', 6),
  imperfect: [],
};

perfectVerbs.set(сберегать.name.text, сберегать);

export { сберегать };