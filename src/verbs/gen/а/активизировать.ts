import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const активизировать: PerfectVerb = {
  name: Word('активизировать', 7),
  singular1stPerson: Word('активизирую', 7),
  singular2ndPerson: Word('активизируешь', 7),
  singular3rdPerson: Word('активизирует', 7),
  plural1stPerson: Word('активизируем', 7),
  plural2ndPerson: Word('активизируете', 7),
  plural3rdPerson: Word('активизируют', 7),
  masculinePast: Word('активизировал', 7),
  femininePast: Word('активизировала', 7),
  neuterPast: Word('активизировало', 7),
  pluralPast: Word('активизировали', 7),
  imperativeInformal: Word('активизируй', 7),
  imperativeFormal: Word('активизируйте', 7),
  imperfect: [],
};

perfectVerbs.set(активизировать.name.text, активизировать);

export { активизировать };