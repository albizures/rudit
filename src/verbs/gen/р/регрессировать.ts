import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const регрессировать: PerfectVerb = {
  name: Word('регрессировать', 7),
  singular1stPerson: Word('регрессирую', 7),
  singular2ndPerson: Word('регрессируешь', 7),
  singular3rdPerson: Word('регрессирует', 7),
  plural1stPerson: Word('регрессируем', 7),
  plural2ndPerson: Word('регрессируете', 7),
  plural3rdPerson: Word('регрессируют', 7),
  masculinePast: Word('регрессировал', 7),
  femininePast: Word('регрессировала', 7),
  neuterPast: Word('регрессировало', 7),
  pluralPast: Word('регрессировали', 7),
  imperativeInformal: Word('регрессируй', 7),
  imperativeFormal: Word('регрессируйте', 7),
  imperfect: [],
};

perfectVerbs.set(регрессировать.name.text, регрессировать);

export { регрессировать };