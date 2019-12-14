import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const консервировать: PerfectVerb = {
  name: Word('консервировать', 7),
  singular1stPerson: Word('консервирую', 7),
  singular2ndPerson: Word('консервируешь', 7),
  singular3rdPerson: Word('консервирует', 7),
  plural1stPerson: Word('консервируем', 7),
  plural2ndPerson: Word('консервируете', 7),
  plural3rdPerson: Word('консервируют', 7),
  masculinePast: Word('консервировал', 7),
  femininePast: Word('консервировала', 7),
  neuterPast: Word('консервировало', 7),
  pluralPast: Word('консервировали', 7),
  imperativeInformal: Word('консервируй', 7),
  imperativeFormal: Word('консервируйте', 7),
  imperfect: [],
};

perfectVerbs.set(консервировать.name.text, консервировать);

export { консервировать };