import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взлететь: PerfectVerb = {
  name: Word('взлететь', 5),
  singular1stPerson: Word('взлечу', 5),
  singular2ndPerson: Word('взлетишь', 5),
  singular3rdPerson: Word('взлетит', 5),
  plural1stPerson: Word('взлетим', 5),
  plural2ndPerson: Word('взлетите', 5),
  plural3rdPerson: Word('взлетят', 5),
  masculinePast: Word('взлетел', 5),
  femininePast: Word('взлетела', 5),
  neuterPast: Word('взлетело', 5),
  pluralPast: Word('взлетели', 5),
  imperativeInformal: Word('взлети', 5),
  imperativeFormal: Word('взлетите', 5),
  imperfect: ['взлетать'],
};

perfectVerbs.set(взлететь.name.text, взлететь);

export { взлететь };