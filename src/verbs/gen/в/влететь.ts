import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const влететь: PerfectVerb = {
  name: Word('влететь', 4),
  singular1stPerson: Word('влечу', 4),
  singular2ndPerson: Word('влетишь', 4),
  singular3rdPerson: Word('влетит', 4),
  plural1stPerson: Word('влетим', 4),
  plural2ndPerson: Word('влетите', 4),
  plural3rdPerson: Word('влетят', 4),
  masculinePast: Word('влетел', 4),
  femininePast: Word('влетела', 4),
  neuterPast: Word('влетело', 4),
  pluralPast: Word('влетели', 4),
  imperativeInformal: Word('влети', 4),
  imperativeFormal: Word('влетите', 4),
  imperfect: [],
};

perfectVerbs.set(влететь.name.text, влететь);

export { влететь };