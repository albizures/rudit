import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const репрессировать: PerfectVerb = {
  name: Word('репрессировать', 7),
  singular1stPerson: Word('репрессирую', 7),
  singular2ndPerson: Word('репрессируешь', 7),
  singular3rdPerson: Word('репрессирует', 7),
  plural1stPerson: Word('репрессируем', 7),
  plural2ndPerson: Word('репрессируете', 7),
  plural3rdPerson: Word('репрессируют', 7),
  masculinePast: Word('репрессировал', 7),
  femininePast: Word('репрессировала', 7),
  neuterPast: Word('репрессировало', 7),
  pluralPast: Word('репрессировали', 7),
  imperativeInformal: Word('репрессируй', 7),
  imperativeFormal: Word('репрессируйте', 7),
  imperfect: [],
};

perfectVerbs.set(репрессировать.name.text, репрессировать);

export { репрессировать };