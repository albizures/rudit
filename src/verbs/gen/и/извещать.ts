import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const извещать: PerfectVerb = {
  name: Word('извещать', 5),
  singular1stPerson: Word('извещаю', 5),
  singular2ndPerson: Word('извещаешь', 5),
  singular3rdPerson: Word('извещает', 5),
  plural1stPerson: Word('извещаем', 5),
  plural2ndPerson: Word('извещаете', 5),
  plural3rdPerson: Word('извещают', 5),
  masculinePast: Word('извещал', 5),
  femininePast: Word('извещала', 5),
  neuterPast: Word('извещало', 5),
  pluralPast: Word('извещали', 5),
  imperativeInformal: Word('извещай', 5),
  imperativeFormal: Word('извещайте', 5),
  imperfect: ['известить'],
};

perfectVerbs.set(извещать.name.text, извещать);

export { извещать };