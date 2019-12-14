import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заехать: PerfectVerb = {
  name: Word('заехать', 2),
  singular1stPerson: Word('заеду', 2),
  singular2ndPerson: Word('заедешь', 2),
  singular3rdPerson: Word('заедет', 2),
  plural1stPerson: Word('заедем', 2),
  plural2ndPerson: Word('заедете', 2),
  plural3rdPerson: Word('заедут', 2),
  masculinePast: Word('заехал', 2),
  femininePast: Word('заехала', 2),
  neuterPast: Word('заехало', 2),
  pluralPast: Word('заехали', 2),
  imperativeInformal: Word('-', -1),
  imperativeFormal: Word('-', -1),
  imperfect: [],
};

perfectVerbs.set(заехать.name.text, заехать);

export { заехать };