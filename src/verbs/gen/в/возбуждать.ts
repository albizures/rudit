import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возбуждать: PerfectVerb = {
  name: Word('возбуждать', 7),
  singular1stPerson: Word('возбуждаю', 7),
  singular2ndPerson: Word('возбуждаешь', 7),
  singular3rdPerson: Word('возбуждает', 7),
  plural1stPerson: Word('возбуждаем', 7),
  plural2ndPerson: Word('возбуждаете', 7),
  plural3rdPerson: Word('возбуждают', 7),
  masculinePast: Word('возбуждал', 7),
  femininePast: Word('возбуждала', 7),
  neuterPast: Word('возбуждало', 7),
  pluralPast: Word('возбуждали', 7),
  imperativeInformal: Word('возбуждай', 7),
  imperativeFormal: Word('возбуждайте', 7),
  imperfect: ['возбудить'],
};

perfectVerbs.set(возбуждать.name.text, возбуждать);

export { возбуждать };