import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улететь: PerfectVerb = {
  name: Word('улететь', 4),
  singular1stPerson: Word('улечу', 4),
  singular2ndPerson: Word('улетишь', 4),
  singular3rdPerson: Word('улетит', 4),
  plural1stPerson: Word('улетим', 4),
  plural2ndPerson: Word('улетите', 4),
  plural3rdPerson: Word('улетят', 4),
  masculinePast: Word('улетел', 4),
  femininePast: Word('улетела', 4),
  neuterPast: Word('улетело', 4),
  pluralPast: Word('улетели', 4),
  imperativeInformal: Word('улети', 4),
  imperativeFormal: Word('улетите', 4),
  imperfect: [],
};

perfectVerbs.set(улететь.name.text, улететь);

export { улететь };