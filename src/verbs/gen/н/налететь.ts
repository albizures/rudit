import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const налететь: PerfectVerb = {
  name: Word('налететь', 5),
  singular1stPerson: Word('налечу', 5),
  singular2ndPerson: Word('налетишь', 5),
  singular3rdPerson: Word('налетит', 5),
  plural1stPerson: Word('налетим', 5),
  plural2ndPerson: Word('налетите', 5),
  plural3rdPerson: Word('налетят', 5),
  masculinePast: Word('налетел', 5),
  femininePast: Word('налетела', 5),
  neuterPast: Word('налетело', 5),
  pluralPast: Word('налетели', 5),
  imperativeInformal: Word('налети', 5),
  imperativeFormal: Word('налетите', 5),
  imperfect: [],
};

perfectVerbs.set(налететь.name.text, налететь);

export { налететь };