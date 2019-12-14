import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const синеть: PerfectVerb = {
  name: Word('синеть', 3),
  singular1stPerson: Word('синею', 3),
  singular2ndPerson: Word('синеешь', 3),
  singular3rdPerson: Word('синеет', 3),
  plural1stPerson: Word('синеем', 3),
  plural2ndPerson: Word('синеете', 3),
  plural3rdPerson: Word('синеют', 3),
  masculinePast: Word('синел', 3),
  femininePast: Word('синела', 3),
  neuterPast: Word('синело', 3),
  pluralPast: Word('синели', 3),
  imperativeInformal: Word('синей', 3),
  imperativeFormal: Word('синейте', 3),
  imperfect: [],
};

perfectVerbs.set(синеть.name.text, синеть);

export { синеть };