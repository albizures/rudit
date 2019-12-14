import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понимать: PerfectVerb = {
  name: Word('понимать', 5),
  singular1stPerson: Word('понимаю', 5),
  singular2ndPerson: Word('понимаешь', 5),
  singular3rdPerson: Word('понимает', 5),
  plural1stPerson: Word('понимаем', 5),
  plural2ndPerson: Word('понимаете', 5),
  plural3rdPerson: Word('понимают', 5),
  masculinePast: Word('понимал', 5),
  femininePast: Word('понимала', 5),
  neuterPast: Word('понимало', 5),
  pluralPast: Word('понимали', 5),
  imperativeInformal: Word('понимай', 5),
  imperativeFormal: Word('понимайте', 5),
  imperfect: ['понять'],
};

perfectVerbs.set(понимать.name.text, понимать);

export { понимать };