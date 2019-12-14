import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const останавливать: PerfectVerb = {
  name: Word('останавливать', 5),
  singular1stPerson: Word('останавливаю', 5),
  singular2ndPerson: Word('останавливаешь', 5),
  singular3rdPerson: Word('останавливает', 5),
  plural1stPerson: Word('останавливаем', 5),
  plural2ndPerson: Word('останавливаете', 5),
  plural3rdPerson: Word('останавливают', 5),
  masculinePast: Word('останавливал', 5),
  femininePast: Word('останавливала', 5),
  neuterPast: Word('останавливало', 5),
  pluralPast: Word('останавливали', 5),
  imperativeInformal: Word('останавливай', 5),
  imperativeFormal: Word('останавливайте', 5),
  imperfect: ['остановить'],
};

perfectVerbs.set(останавливать.name.text, останавливать);

export { останавливать };