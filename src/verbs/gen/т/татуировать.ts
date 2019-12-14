import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const татуировать: PerfectVerb = {
  name: Word('татуировать', 4),
  singular1stPerson: Word('татуирую', 4),
  singular2ndPerson: Word('татуируешь', 4),
  singular3rdPerson: Word('татуирует', 4),
  plural1stPerson: Word('татуируем', 4),
  plural2ndPerson: Word('татуируете', 4),
  plural3rdPerson: Word('татуируют', 4),
  masculinePast: Word('татуировал', 4),
  femininePast: Word('татуировала', 4),
  neuterPast: Word('татуировало', 4),
  pluralPast: Word('татуировали', 4),
  imperativeInformal: Word('татуируй', 4),
  imperativeFormal: Word('татуируйте', 4),
  imperfect: [],
};

perfectVerbs.set(татуировать.name.text, татуировать);

export { татуировать };