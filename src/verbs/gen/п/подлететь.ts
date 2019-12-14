import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подлететь: PerfectVerb = {
  name: Word('подлететь', 6),
  singular1stPerson: Word('подлечу', 6),
  singular2ndPerson: Word('подлетишь', 6),
  singular3rdPerson: Word('подлетит', 6),
  plural1stPerson: Word('подлетим', 6),
  plural2ndPerson: Word('подлетите', 6),
  plural3rdPerson: Word('подлетят', 6),
  masculinePast: Word('подлетел', 6),
  femininePast: Word('подлетела', 6),
  neuterPast: Word('подлетело', 6),
  pluralPast: Word('подлетели', 6),
  imperativeInformal: Word('подлети', 6),
  imperativeFormal: Word('подлетите', 6),
  imperfect: [],
};

perfectVerbs.set(подлететь.name.text, подлететь);

export { подлететь };