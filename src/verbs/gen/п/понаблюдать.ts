import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понаблюдать: PerfectVerb = {
  name: Word('понаблюдать', 8),
  singular1stPerson: Word('понаблюдаю', 8),
  singular2ndPerson: Word('понаблюдаешь', 8),
  singular3rdPerson: Word('понаблюдает', 8),
  plural1stPerson: Word('понаблюдаем', 8),
  plural2ndPerson: Word('понаблюдаете', 8),
  plural3rdPerson: Word('понаблюдают', 8),
  masculinePast: Word('понаблюдал', 8),
  femininePast: Word('понаблюдала', 8),
  neuterPast: Word('понаблюдало', 8),
  pluralPast: Word('понаблюдали', 8),
  imperativeInformal: Word('понаблюдай', 8),
  imperativeFormal: Word('понаблюдайте', 8),
  imperfect: [],
};

perfectVerbs.set(понаблюдать.name.text, понаблюдать);

export { понаблюдать };