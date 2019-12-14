import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const штриховать: PerfectVerb = {
  name: Word('штриховать', 7),
  singular1stPerson: Word('штрихую', 5),
  singular2ndPerson: Word('штрихуешь', 5),
  singular3rdPerson: Word('штрихует', 5),
  plural1stPerson: Word('штрихуем', 5),
  plural2ndPerson: Word('штрихуете', 5),
  plural3rdPerson: Word('штрихуют', 5),
  masculinePast: Word('штриховал', 7),
  femininePast: Word('штриховала', 7),
  neuterPast: Word('штриховало', 7),
  pluralPast: Word('штриховали', 7),
  imperativeInformal: Word('штрихуй', 5),
  imperativeFormal: Word('штрихуйте', 5),
  imperfect: [],
};

perfectVerbs.set(штриховать.name.text, штриховать);

export { штриховать };