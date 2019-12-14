import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подъехать: PerfectVerb = {
  name: Word('подъехать', 4),
  singular1stPerson: Word('подъеду', 4),
  singular2ndPerson: Word('подъедешь', 4),
  singular3rdPerson: Word('подъедет', 4),
  plural1stPerson: Word('подъедем', 4),
  plural2ndPerson: Word('подъедете', 4),
  plural3rdPerson: Word('подъедут', 4),
  masculinePast: Word('подъехал', 4),
  femininePast: Word('подъехала', 4),
  neuterPast: Word('подъехало', 4),
  pluralPast: Word('подъехали', 4),
  imperativeInformal: Word('-', -1),
  imperativeFormal: Word('-', -1),
  imperfect: [],
};

perfectVerbs.set(подъехать.name.text, подъехать);

export { подъехать };