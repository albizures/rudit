import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const транслировать: PerfectVerb = {
  name: Word('транслировать', 6),
  singular1stPerson: Word('транслирую', 6),
  singular2ndPerson: Word('транслируешь', 6),
  singular3rdPerson: Word('транслирует', 6),
  plural1stPerson: Word('транслируем', 6),
  plural2ndPerson: Word('транслируете', 6),
  plural3rdPerson: Word('транслируют', 6),
  masculinePast: Word('транслировал', 6),
  femininePast: Word('транслировала', 6),
  neuterPast: Word('транслировало', 6),
  pluralPast: Word('транслировали', 6),
  imperativeInformal: Word('транслируй', 6),
  imperativeFormal: Word('транслируйте', 6),
  imperfect: [],
};

perfectVerbs.set(транслировать.name.text, транслировать);

export { транслировать };