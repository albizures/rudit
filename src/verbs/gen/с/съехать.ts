import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const съехать: PerfectVerb = {
  name: Word('съехать', 2),
  singular1stPerson: Word('съеду', 2),
  singular2ndPerson: Word('съедешь', 2),
  singular3rdPerson: Word('съедет', 2),
  plural1stPerson: Word('съедем', 2),
  plural2ndPerson: Word('съедете', 2),
  plural3rdPerson: Word('съедут', 2),
  masculinePast: Word('съехал', 2),
  femininePast: Word('съехала', 2),
  neuterPast: Word('съехало', 2),
  pluralPast: Word('съехали', 2),
  imperativeInformal: Word('-', -1),
  imperativeFormal: Word('-', -1),
  imperfect: [],
};

perfectVerbs.set(съехать.name.text, съехать);

export { съехать };