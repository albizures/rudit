import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наболеть: PerfectVerb = {
  name: Word('наболеть', 5),
  singular1stPerson: Word('наболею', 5),
  singular2ndPerson: Word('наболеешь', 5),
  singular3rdPerson: Word('наболеет', 5),
  plural1stPerson: Word('наболеем', 5),
  plural2ndPerson: Word('наболеете', 5),
  plural3rdPerson: Word('наболеют', 5),
  masculinePast: Word('наболел', 5),
  femininePast: Word('наболела', 5),
  neuterPast: Word('наболело', 5),
  pluralPast: Word('наболели', 5),
  imperativeInformal: Word('наболей', 5),
  imperativeFormal: Word('наболейте', 5),
  imperfect: [],
};

perfectVerbs.set(наболеть.name.text, наболеть);

export { наболеть };