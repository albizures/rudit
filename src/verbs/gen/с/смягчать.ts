import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смягчать: PerfectVerb = {
  name: Word('смягчать', 5),
  singular1stPerson: Word('смягчаю', 5),
  singular2ndPerson: Word('смягчаешь', 5),
  singular3rdPerson: Word('смягчает', 5),
  plural1stPerson: Word('смягчаем', 5),
  plural2ndPerson: Word('смягчаете', 5),
  plural3rdPerson: Word('смягчают', 5),
  masculinePast: Word('смягчал', 5),
  femininePast: Word('смягчала', 5),
  neuterPast: Word('смягчало', 5),
  pluralPast: Word('смягчали', 5),
  imperativeInformal: Word('смягчай', 5),
  imperativeFormal: Word('смягчайте', 5),
  imperfect: ['смягчить'],
};

perfectVerbs.set(смягчать.name.text, смягчать);

export { смягчать };