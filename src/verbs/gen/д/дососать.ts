import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дососать: PerfectVerb = {
  name: Word('дососать', 5),
  singular1stPerson: Word('дососу', 5),
  singular2ndPerson: Word('дососёшь', 5),
  singular3rdPerson: Word('дососёт', 5),
  plural1stPerson: Word('дососём', 5),
  plural2ndPerson: Word('дососёте', 5),
  plural3rdPerson: Word('дососут', 5),
  masculinePast: Word('дососал', 5),
  femininePast: Word('дососала', 5),
  neuterPast: Word('дососало', 5),
  pluralPast: Word('дососали', 5),
  imperativeInformal: Word('дососи', 5),
  imperativeFormal: Word('дососите', 5),
  imperfect: [],
};

perfectVerbs.set(дососать.name.text, дососать);

export { дососать };