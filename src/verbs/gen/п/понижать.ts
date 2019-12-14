import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понижать: PerfectVerb = {
  name: Word('понижать', 5),
  singular1stPerson: Word('понижаю', 5),
  singular2ndPerson: Word('понижаешь', 5),
  singular3rdPerson: Word('понижает', 5),
  plural1stPerson: Word('понижаем', 5),
  plural2ndPerson: Word('понижаете', 5),
  plural3rdPerson: Word('понижают', 5),
  masculinePast: Word('понижал', 5),
  femininePast: Word('понижала', 5),
  neuterPast: Word('понижало', 5),
  pluralPast: Word('понижали', 5),
  imperativeInformal: Word('понижай', 5),
  imperativeFormal: Word('понижайте', 5),
  imperfect: [],
};

perfectVerbs.set(понижать.name.text, понижать);

export { понижать };