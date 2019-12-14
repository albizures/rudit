import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залететь: PerfectVerb = {
  name: Word('залететь', 5),
  singular1stPerson: Word('залечу', 5),
  singular2ndPerson: Word('залетишь', 5),
  singular3rdPerson: Word('залетит', 5),
  plural1stPerson: Word('залетим', 5),
  plural2ndPerson: Word('залетите', 5),
  plural3rdPerson: Word('залетят', 5),
  masculinePast: Word('залетел', 5),
  femininePast: Word('залетела', 5),
  neuterPast: Word('залетело', 5),
  pluralPast: Word('залетели', 5),
  imperativeInformal: Word('залети', 5),
  imperativeFormal: Word('залетите', 5),
  imperfect: [],
};

perfectVerbs.set(залететь.name.text, залететь);

export { залететь };