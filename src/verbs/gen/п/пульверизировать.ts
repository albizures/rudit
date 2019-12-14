import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пульверизировать: PerfectVerb = {
  name: Word('пульверизировать', 9),
  singular1stPerson: Word('пульверизирую', 9),
  singular2ndPerson: Word('пульверизируешь', 9),
  singular3rdPerson: Word('пульверизирует', 9),
  plural1stPerson: Word('пульверизируем', 9),
  plural2ndPerson: Word('пульверизируете', 9),
  plural3rdPerson: Word('пульверизируют', 9),
  masculinePast: Word('пульверизировал', 9),
  femininePast: Word('пульверизировала', 9),
  neuterPast: Word('пульверизировало', 9),
  pluralPast: Word('пульверизировали', 9),
  imperativeInformal: Word('пульверизируй', 9),
  imperativeFormal: Word('пульверизируйте', 9),
  imperfect: [],
};

perfectVerbs.set(пульверизировать.name.text, пульверизировать);

export { пульверизировать };