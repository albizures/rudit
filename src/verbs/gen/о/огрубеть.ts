import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const огрубеть: PerfectVerb = {
  name: Word('огрубеть', 5),
  singular1stPerson: Word('огрубею', 5),
  singular2ndPerson: Word('огрубеешь', 5),
  singular3rdPerson: Word('огрубеет', 5),
  plural1stPerson: Word('огрубеем', 5),
  plural2ndPerson: Word('огрубеете', 5),
  plural3rdPerson: Word('огрубеют', 5),
  masculinePast: Word('огрубел', 5),
  femininePast: Word('огрубела', 5),
  neuterPast: Word('огрубело', 5),
  pluralPast: Word('огрубели', 5),
  imperativeInformal: Word('огрубей', 5),
  imperativeFormal: Word('огрубейте', 5),
  imperfect: [],
};

perfectVerbs.set(огрубеть.name.text, огрубеть);

export { огрубеть };