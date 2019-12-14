import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снимать: PerfectVerb = {
  name: Word('снимать', 4),
  singular1stPerson: Word('снимаю', 4),
  singular2ndPerson: Word('снимаешь', 4),
  singular3rdPerson: Word('снимает', 4),
  plural1stPerson: Word('снимаем', 4),
  plural2ndPerson: Word('снимаете', 4),
  plural3rdPerson: Word('снимают', 4),
  masculinePast: Word('снимал', 4),
  femininePast: Word('снимала', 4),
  neuterPast: Word('снимало', 4),
  pluralPast: Word('снимали', 4),
  imperativeInformal: Word('снимай', 4),
  imperativeFormal: Word('снимайте', 4),
  imperfect: ['снять'],
};

perfectVerbs.set(снимать.name.text, снимать);

export { снимать };