import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const донимать: PerfectVerb = {
  name: Word('донимать', 5),
  singular1stPerson: Word('донимаю', 5),
  singular2ndPerson: Word('донимаешь', 5),
  singular3rdPerson: Word('донимает', 5),
  plural1stPerson: Word('донимаем', 5),
  plural2ndPerson: Word('донимаете', 5),
  plural3rdPerson: Word('донимают', 5),
  masculinePast: Word('донимал', 5),
  femininePast: Word('донимала', 5),
  neuterPast: Word('донимало', 5),
  pluralPast: Word('донимали', 5),
  imperativeInformal: Word('донимай', 5),
  imperativeFormal: Word('донимайте', 5),
  imperfect: [],
};

perfectVerbs.set(донимать.name.text, донимать);

export { донимать };