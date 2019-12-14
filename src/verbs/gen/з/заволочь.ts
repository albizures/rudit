import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заволочь: PerfectVerb = {
  name: Word('заволочь', 5),
  singular1stPerson: Word('заволоку', 7),
  singular2ndPerson: Word('заволочёшь', 1),
  singular3rdPerson: Word('заволочёт', 1),
  plural1stPerson: Word('заволочём', 1),
  plural2ndPerson: Word('заволочёте', 1),
  plural3rdPerson: Word('заволокут', 7),
  masculinePast: Word('заволок', 5),
  femininePast: Word('заволокла', 8),
  neuterPast: Word('заволокло', 8),
  pluralPast: Word('заволокли', 8),
  imperativeInformal: Word('заволоки', 7),
  imperativeFormal: Word('заволоките', 7),
  imperfect: [],
};

perfectVerbs.set(заволочь.name.text, заволочь);

export { заволочь };