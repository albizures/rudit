import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повелеть: PerfectVerb = {
  name: Word('повелеть', 5),
  singular1stPerson: Word('повелю', 5),
  singular2ndPerson: Word('повелишь', 5),
  singular3rdPerson: Word('повелит', 5),
  plural1stPerson: Word('повелим', 5),
  plural2ndPerson: Word('повелите', 5),
  plural3rdPerson: Word('повелят', 5),
  masculinePast: Word('повелел', 5),
  femininePast: Word('повелела', 5),
  neuterPast: Word('повелело', 5),
  pluralPast: Word('повелели', 5),
  imperativeInformal: Word('повели', 5),
  imperativeFormal: Word('повелите', 5),
  imperfect: [],
};

perfectVerbs.set(повелеть.name.text, повелеть);

export { повелеть };