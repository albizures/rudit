import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const располагать: PerfectVerb = {
  name: Word('располагать', 8),
  singular1stPerson: Word('располагаю', 8),
  singular2ndPerson: Word('располагаешь', 8),
  singular3rdPerson: Word('располагает', 8),
  plural1stPerson: Word('располагаем', 8),
  plural2ndPerson: Word('располагаете', 8),
  plural3rdPerson: Word('располагают', 8),
  masculinePast: Word('располагал', 8),
  femininePast: Word('располагала', 8),
  neuterPast: Word('располагало', 8),
  pluralPast: Word('располагали', 8),
  imperativeInformal: Word('располагай', 8),
  imperativeFormal: Word('располагайте', 8),
  imperfect: ['расположить'],
};

perfectVerbs.set(располагать.name.text, располагать);

export { располагать };