import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ретранслировать: PerfectVerb = {
  name: Word('ретранслировать', 8),
  singular1stPerson: Word('ретранслирую', 8),
  singular2ndPerson: Word('ретранслируешь', 8),
  singular3rdPerson: Word('ретранслирует', 8),
  plural1stPerson: Word('ретранслируем', 8),
  plural2ndPerson: Word('ретранслируете', 8),
  plural3rdPerson: Word('ретранслируют', 8),
  masculinePast: Word('ретранслировал', 8),
  femininePast: Word('ретранслировала', 8),
  neuterPast: Word('ретранслировало', 8),
  pluralPast: Word('ретранслировали', 8),
  imperativeInformal: Word('ретранслируй', 8),
  imperativeFormal: Word('ретранслируйте', 8),
  imperfect: [],
};

perfectVerbs.set(ретранслировать.name.text, ретранслировать);

export { ретранслировать };