import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пустеть: PerfectVerb = {
  name: Word('пустеть', 4),
  singular1stPerson: Word('пустею', 4),
  singular2ndPerson: Word('пустеешь', 4),
  singular3rdPerson: Word('пустеет', 4),
  plural1stPerson: Word('пустеем', 4),
  plural2ndPerson: Word('пустеете', 4),
  plural3rdPerson: Word('пустеют', 4),
  masculinePast: Word('пустел', 4),
  femininePast: Word('пустела', 4),
  neuterPast: Word('пустело', 4),
  pluralPast: Word('пустели', 4),
  imperativeInformal: Word('пустей', 4),
  imperativeFormal: Word('пустейте', 4),
  imperfect: [],
};

perfectVerbs.set(пустеть.name.text, пустеть);

export { пустеть };