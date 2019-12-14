import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нажимать: PerfectVerb = {
  name: Word('нажимать', 5),
  singular1stPerson: Word('нажимаю', 5),
  singular2ndPerson: Word('нажимаешь', 5),
  singular3rdPerson: Word('нажимает', 5),
  plural1stPerson: Word('нажимаем', 5),
  plural2ndPerson: Word('нажимаете', 5),
  plural3rdPerson: Word('нажимают', 5),
  masculinePast: Word('нажимал', 5),
  femininePast: Word('нажимала', 5),
  neuterPast: Word('нажимало', 5),
  pluralPast: Word('нажимали', 5),
  imperativeInformal: Word('нажимай', 5),
  imperativeFormal: Word('нажимайте', 5),
  imperfect: ['нажать'],
};

perfectVerbs.set(нажимать.name.text, нажимать);

export { нажимать };