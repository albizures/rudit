import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утверждать: PerfectVerb = {
  name: Word('утверждать', 7),
  singular1stPerson: Word('утверждаю', 7),
  singular2ndPerson: Word('утверждаешь', 7),
  singular3rdPerson: Word('утверждает', 7),
  plural1stPerson: Word('утверждаем', 7),
  plural2ndPerson: Word('утверждаете', 7),
  plural3rdPerson: Word('утверждают', 7),
  masculinePast: Word('утверждал', 7),
  femininePast: Word('утверждала', 7),
  neuterPast: Word('утверждало', 7),
  pluralPast: Word('утверждали', 7),
  imperativeInformal: Word('утверждай', 7),
  imperativeFormal: Word('утверждайте', 7),
  imperfect: ['утвердить'],
};

perfectVerbs.set(утверждать.name.text, утверждать);

export { утверждать };