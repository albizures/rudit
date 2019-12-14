import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const молодеть: PerfectVerb = {
  name: Word('молодеть', 5),
  singular1stPerson: Word('молодею', 5),
  singular2ndPerson: Word('молодеешь', 5),
  singular3rdPerson: Word('молодеет', 5),
  plural1stPerson: Word('молодеем', 5),
  plural2ndPerson: Word('молодеете', 5),
  plural3rdPerson: Word('молодеют', 5),
  masculinePast: Word('молодел', 5),
  femininePast: Word('молодела', 5),
  neuterPast: Word('молодело', 5),
  pluralPast: Word('молодели', 5),
  imperativeInformal: Word('молодей', 5),
  imperativeFormal: Word('молодейте', 5),
  imperfect: [],
};

perfectVerbs.set(молодеть.name.text, молодеть);

export { молодеть };