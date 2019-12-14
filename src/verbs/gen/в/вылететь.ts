import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылететь: PerfectVerb = {
  name: Word('вылететь', 1),
  singular1stPerson: Word('вылечу', 1),
  singular2ndPerson: Word('вылетишь', 1),
  singular3rdPerson: Word('вылетит', 1),
  plural1stPerson: Word('вылетим', 1),
  plural2ndPerson: Word('вылетите', 1),
  plural3rdPerson: Word('вылетят', 1),
  masculinePast: Word('вылетел', 1),
  femininePast: Word('вылетела', 1),
  neuterPast: Word('вылетело', 1),
  pluralPast: Word('вылетели', 1),
  imperativeInformal: Word('вылети', 1),
  imperativeFormal: Word('вылетите', 1),
  imperfect: [],
};

perfectVerbs.set(вылететь.name.text, вылететь);

export { вылететь };