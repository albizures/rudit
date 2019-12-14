import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const успеть: PerfectVerb = {
  name: Word('успеть', 3),
  singular1stPerson: Word('успею', 3),
  singular2ndPerson: Word('успеешь', 3),
  singular3rdPerson: Word('успеет', 3),
  plural1stPerson: Word('успеем', 3),
  plural2ndPerson: Word('успеете', 3),
  plural3rdPerson: Word('успеют', 3),
  masculinePast: Word('успел', 3),
  femininePast: Word('успела', 3),
  neuterPast: Word('успело', 3),
  pluralPast: Word('успели', 3),
  imperativeInformal: Word('успей', 3),
  imperativeFormal: Word('успейте', 3),
  imperfect: ['успевать'],
};

perfectVerbs.set(успеть.name.text, успеть);

export { успеть };