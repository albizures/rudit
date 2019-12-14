import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посещать: PerfectVerb = {
  name: Word('посещать', 5),
  singular1stPerson: Word('посещаю', 5),
  singular2ndPerson: Word('посещаешь', 5),
  singular3rdPerson: Word('посещает', 5),
  plural1stPerson: Word('посещаем', 5),
  plural2ndPerson: Word('посещаете', 5),
  plural3rdPerson: Word('посещают', 5),
  masculinePast: Word('посещал', 5),
  femininePast: Word('посещала', 5),
  neuterPast: Word('посещало', 5),
  pluralPast: Word('посещали', 5),
  imperativeInformal: Word('посещай', 5),
  imperativeFormal: Word('посещайте', 5),
  imperfect: ['посетить'],
};

perfectVerbs.set(посещать.name.text, посещать);

export { посещать };