import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const синтезировать: PerfectVerb = {
  name: Word('синтезировать', 6),
  singular1stPerson: Word('синтезирую', 6),
  singular2ndPerson: Word('синтезируешь', 6),
  singular3rdPerson: Word('синтезирует', 6),
  plural1stPerson: Word('синтезируем', 6),
  plural2ndPerson: Word('синтезируете', 6),
  plural3rdPerson: Word('синтезируют', 6),
  masculinePast: Word('синтезировал', 6),
  femininePast: Word('синтезировала', 6),
  neuterPast: Word('синтезировало', 6),
  pluralPast: Word('синтезировали', 6),
  imperativeInformal: Word('синтезируй', 6),
  imperativeFormal: Word('синтезируйте', 6),
  imperfect: [],
};

perfectVerbs.set(синтезировать.name.text, синтезировать);

export { синтезировать };