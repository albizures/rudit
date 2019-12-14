import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const холодеть: PerfectVerb = {
  name: Word('холодеть', 5),
  singular1stPerson: Word('холодею', 5),
  singular2ndPerson: Word('холодеешь', 5),
  singular3rdPerson: Word('холодеет', 5),
  plural1stPerson: Word('холодеем', 5),
  plural2ndPerson: Word('холодеете', 5),
  plural3rdPerson: Word('холодеют', 5),
  masculinePast: Word('холодел', 5),
  femininePast: Word('холодела', 5),
  neuterPast: Word('холодело', 5),
  pluralPast: Word('холодели', 5),
  imperativeInformal: Word('холодей', 5),
  imperativeFormal: Word('холодейте', 5),
  imperfect: [],
};

perfectVerbs.set(холодеть.name.text, холодеть);

export { холодеть };