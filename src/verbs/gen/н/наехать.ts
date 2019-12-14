import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наехать: PerfectVerb = {
  name: Word('наехать', 2),
  singular1stPerson: Word('наеду', 2),
  singular2ndPerson: Word('наедешь', 2),
  singular3rdPerson: Word('наедет', 2),
  plural1stPerson: Word('наедем', 2),
  plural2ndPerson: Word('наедете', 2),
  plural3rdPerson: Word('наедут', 2),
  masculinePast: Word('наехал', 2),
  femininePast: Word('наехала', 2),
  neuterPast: Word('наехало', 2),
  pluralPast: Word('наехали', 2),
  imperativeInformal: Word('-', -1),
  imperativeFormal: Word('-', -1),
  imperfect: [],
};

perfectVerbs.set(наехать.name.text, наехать);

export { наехать };