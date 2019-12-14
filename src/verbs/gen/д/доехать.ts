import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доехать: PerfectVerb = {
  name: Word('доехать', 2),
  singular1stPerson: Word('доеду', 2),
  singular2ndPerson: Word('доедешь', 2),
  singular3rdPerson: Word('доедет', 2),
  plural1stPerson: Word('доедем', 2),
  plural2ndPerson: Word('доедете', 2),
  plural3rdPerson: Word('доедут', 2),
  masculinePast: Word('доехал', 2),
  femininePast: Word('доехала', 2),
  neuterPast: Word('доехало', 2),
  pluralPast: Word('доехали', 2),
  imperativeInformal: Word('-', -1),
  imperativeFormal: Word('-', -1),
  imperfect: [],
};

perfectVerbs.set(доехать.name.text, доехать);

export { доехать };