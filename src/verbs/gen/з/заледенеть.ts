import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заледенеть: PerfectVerb = {
  name: Word('заледенеть', 7),
  singular1stPerson: Word('заледенею', 7),
  singular2ndPerson: Word('заледенеешь', 7),
  singular3rdPerson: Word('заледенеет', 7),
  plural1stPerson: Word('заледенеем', 7),
  plural2ndPerson: Word('заледенеете', 7),
  plural3rdPerson: Word('заледенеют', 7),
  masculinePast: Word('заледенел', 7),
  femininePast: Word('заледенела', 7),
  neuterPast: Word('заледенело', 7),
  pluralPast: Word('заледенели', 7),
  imperativeInformal: Word('заледеней', 7),
  imperativeFormal: Word('заледенейте', 7),
  imperfect: [],
};

perfectVerbs.set(заледенеть.name.text, заледенеть);

export { заледенеть };