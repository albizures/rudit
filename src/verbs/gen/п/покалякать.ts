import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покалякать: PerfectVerb = {
  name: Word('покалякать', 5),
  singular1stPerson: Word('покалякаю', 5),
  singular2ndPerson: Word('покалякаешь', 5),
  singular3rdPerson: Word('покалякает', 5),
  plural1stPerson: Word('покалякаем', 5),
  plural2ndPerson: Word('покалякаете', 5),
  plural3rdPerson: Word('покалякают', 5),
  masculinePast: Word('покалякал', 5),
  femininePast: Word('покалякала', 5),
  neuterPast: Word('покалякало', 5),
  pluralPast: Word('покалякали', 5),
  imperativeInformal: Word('покалякай', 5),
  imperativeFormal: Word('покалякайте', 5),
  imperfect: [],
};

perfectVerbs.set(покалякать.name.text, покалякать);

export { покалякать };