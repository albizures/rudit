import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заболеть: PerfectVerb = {
  name: Word('заболеть', 5),
  singular1stPerson: Word('заболею', 5),
  singular2ndPerson: Word('заболеешь', 5),
  singular3rdPerson: Word('заболеет', 5),
  plural1stPerson: Word('заболеем', 5),
  plural2ndPerson: Word('заболеете', 5),
  plural3rdPerson: Word('заболеют', 5),
  masculinePast: Word('заболел', 5),
  femininePast: Word('заболела', 5),
  neuterPast: Word('заболело', 5),
  pluralPast: Word('заболели', 5),
  imperativeInformal: Word('заболей', 5),
  imperativeFormal: Word('заболейте', 5),
  imperfect: ['заболевать'],
};

perfectVerbs.set(заболеть.name.text, заболеть);

export { заболеть };