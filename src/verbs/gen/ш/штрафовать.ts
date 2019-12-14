import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const штрафовать: PerfectVerb = {
  name: Word('штрафовать', 7),
  singular1stPerson: Word('штрафую', 5),
  singular2ndPerson: Word('штрафуешь', 5),
  singular3rdPerson: Word('штрафует', 5),
  plural1stPerson: Word('штрафуем', 5),
  plural2ndPerson: Word('штрафуете', 5),
  plural3rdPerson: Word('штрафуют', 5),
  masculinePast: Word('штрафовал', 7),
  femininePast: Word('штрафовала', 7),
  neuterPast: Word('штрафовало', 7),
  pluralPast: Word('штрафовали', 7),
  imperativeInformal: Word('штрафуй', 5),
  imperativeFormal: Word('штрафуйте', 5),
  imperfect: ['оштрафовать'],
};

perfectVerbs.set(штрафовать.name.text, штрафовать);

export { штрафовать };