import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слететь: PerfectVerb = {
  name: Word('слететь', 4),
  singular1stPerson: Word('слечу', 4),
  singular2ndPerson: Word('слетишь', 4),
  singular3rdPerson: Word('слетит', 4),
  plural1stPerson: Word('слетим', 4),
  plural2ndPerson: Word('слетите', 4),
  plural3rdPerson: Word('слетят', 4),
  masculinePast: Word('слетел', 4),
  femininePast: Word('слетела', 4),
  neuterPast: Word('слетело', 4),
  pluralPast: Word('слетели', 4),
  imperativeInformal: Word('слети', 4),
  imperativeFormal: Word('слетите', 4),
  imperfect: [],
};

perfectVerbs.set(слететь.name.text, слететь);

export { слететь };