import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предполагать: PerfectVerb = {
  name: Word('предполагать', 9),
  singular1stPerson: Word('предполагаю', 9),
  singular2ndPerson: Word('предполагаешь', 9),
  singular3rdPerson: Word('предполагает', 9),
  plural1stPerson: Word('предполагаем', 9),
  plural2ndPerson: Word('предполагаете', 9),
  plural3rdPerson: Word('предполагают', 9),
  masculinePast: Word('предполагал', 9),
  femininePast: Word('предполагала', 9),
  neuterPast: Word('предполагало', 9),
  pluralPast: Word('предполагали', 9),
  imperativeInformal: Word('предполагай', 9),
  imperativeFormal: Word('предполагайте', 9),
  imperfect: ['предположить'],
};

perfectVerbs.set(предполагать.name.text, предполагать);

export { предполагать };