import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облететь: PerfectVerb = {
  name: Word('облететь', 5),
  singular1stPerson: Word('облечу', 5),
  singular2ndPerson: Word('облетишь', 5),
  singular3rdPerson: Word('облетит', 5),
  plural1stPerson: Word('облетим', 5),
  plural2ndPerson: Word('облетите', 5),
  plural3rdPerson: Word('облетят', 5),
  masculinePast: Word('облетел', 5),
  femininePast: Word('облетела', 5),
  neuterPast: Word('облетело', 5),
  pluralPast: Word('облетели', 5),
  imperativeInformal: Word('облети', 5),
  imperativeFormal: Word('облетите', 5),
  imperfect: [],
};

perfectVerbs.set(облететь.name.text, облететь);

export { облететь };