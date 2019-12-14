import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытрясти: PerfectVerb = {
  name: Word('вытрясти', 1),
  singular1stPerson: Word('вытрясу', 1),
  singular2ndPerson: Word('вытрясешь', 1),
  singular3rdPerson: Word('вытрясет', 1),
  plural1stPerson: Word('вытрясем', 1),
  plural2ndPerson: Word('вытрясете', 1),
  plural3rdPerson: Word('вытрясут', 1),
  masculinePast: Word('вытряс', 1),
  femininePast: Word('вытрясла', 1),
  neuterPast: Word('вытрясло', 1),
  pluralPast: Word('вытрясли', 1),
  imperativeInformal: Word('вытряси', 1),
  imperativeFormal: Word('вытрясите', 1),
  imperfect: [],
};

perfectVerbs.set(вытрясти.name.text, вытрясти);

export { вытрясти };