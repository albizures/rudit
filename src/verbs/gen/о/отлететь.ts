import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отлететь: PerfectVerb = {
  name: Word('отлететь', 5),
  singular1stPerson: Word('отлечу', 5),
  singular2ndPerson: Word('отлетишь', 5),
  singular3rdPerson: Word('отлетит', 5),
  plural1stPerson: Word('отлетим', 5),
  plural2ndPerson: Word('отлетите', 5),
  plural3rdPerson: Word('отлетят', 5),
  masculinePast: Word('отлетел', 5),
  femininePast: Word('отлетела', 5),
  neuterPast: Word('отлетело', 5),
  pluralPast: Word('отлетели', 5),
  imperativeInformal: Word('отлети', 5),
  imperativeFormal: Word('отлетите', 5),
  imperfect: [],
};

perfectVerbs.set(отлететь.name.text, отлететь);

export { отлететь };