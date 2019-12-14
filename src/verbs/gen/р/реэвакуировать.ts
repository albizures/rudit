import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const реэвакуировать: PerfectVerb = {
  name: Word('реэвакуировать', 7),
  singular1stPerson: Word('реэвакуирую', 7),
  singular2ndPerson: Word('реэвакуируешь', 7),
  singular3rdPerson: Word('реэвакуирует', 7),
  plural1stPerson: Word('реэвакуируем', 7),
  plural2ndPerson: Word('реэвакуируете', 7),
  plural3rdPerson: Word('реэвакуируют', 7),
  masculinePast: Word('реэвакуировал', 7),
  femininePast: Word('реэвакуировала', 7),
  neuterPast: Word('реэвакуировало', 7),
  pluralPast: Word('реэвакуировали', 7),
  imperativeInformal: Word('реэвакуируй', 7),
  imperativeFormal: Word('реэвакуируйте', 7),
  imperfect: [],
};

perfectVerbs.set(реэвакуировать.name.text, реэвакуировать);

export { реэвакуировать };