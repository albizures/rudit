import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понаехать: PerfectVerb = {
  name: Word('понаехать', 4),
  singular1stPerson: Word('понаеду', 4),
  singular2ndPerson: Word('понаедешь', 4),
  singular3rdPerson: Word('понаедет', 4),
  plural1stPerson: Word('понаедем', 4),
  plural2ndPerson: Word('понаедете', 4),
  plural3rdPerson: Word('понаедут', 4),
  masculinePast: Word('понаехал', 4),
  femininePast: Word('понаехала', 4),
  neuterPast: Word('понаехало', 4),
  pluralPast: Word('понаехали', 4),
  imperativeInformal: Word('-', -1),
  imperativeFormal: Word('-', -1),
  imperfect: [],
};

perfectVerbs.set(понаехать.name.text, понаехать);

export { понаехать };