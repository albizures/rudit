import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дослать: PerfectVerb = {
  name: Word('дослать', 4),
  singular1stPerson: Word('дошлю', 4),
  singular2ndPerson: Word('дошлёшь', 1),
  singular3rdPerson: Word('дошлёт', 1),
  plural1stPerson: Word('дошлём', 1),
  plural2ndPerson: Word('дошлёте', 6),
  plural3rdPerson: Word('дошлют', 4),
  masculinePast: Word('дослал', 4),
  femininePast: Word('дослала', 4),
  neuterPast: Word('дослало', 4),
  pluralPast: Word('дослали', 4),
  imperativeInformal: Word('дошли', 4),
  imperativeFormal: Word('дошлите', 4),
  imperfect: [],
};

perfectVerbs.set(дослать.name.text, дослать);

export { дослать };