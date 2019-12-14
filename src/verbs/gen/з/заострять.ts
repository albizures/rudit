import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заострять: PerfectVerb = {
  name: Word('заострять', 6),
  singular1stPerson: Word('заостряю', 6),
  singular2ndPerson: Word('заостряешь', 6),
  singular3rdPerson: Word('заостряет', 6),
  plural1stPerson: Word('заостряем', 6),
  plural2ndPerson: Word('заостряете', 6),
  plural3rdPerson: Word('заостряют', 6),
  masculinePast: Word('заострял', 6),
  femininePast: Word('заостряла', 6),
  neuterPast: Word('заостряло', 6),
  pluralPast: Word('заостряли', 6),
  imperativeInformal: Word('заостряй', 6),
  imperativeFormal: Word('заостряйте', 6),
  imperfect: [],
};

perfectVerbs.set(заострять.name.text, заострять);

export { заострять };