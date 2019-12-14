import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отъехать: PerfectVerb = {
  name: Word('отъехать', 3),
  singular1stPerson: Word('отъеду', 3),
  singular2ndPerson: Word('отъедешь', 3),
  singular3rdPerson: Word('отъедет', 3),
  plural1stPerson: Word('отъедем', 3),
  plural2ndPerson: Word('отъедете', 3),
  plural3rdPerson: Word('отъедут', 3),
  masculinePast: Word('отъехал', 3),
  femininePast: Word('отъехала', 3),
  neuterPast: Word('отъехало', 3),
  pluralPast: Word('отъехали', 3),
  imperativeInformal: Word('отъедь', 3),
  imperativeFormal: Word('отъедьте', 3),
  imperfect: [],
};

perfectVerbs.set(отъехать.name.text, отъехать);

export { отъехать };