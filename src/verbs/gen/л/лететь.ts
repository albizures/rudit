import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лететь: PerfectVerb = {
  name: Word('лететь', 3),
  singular1stPerson: Word('лечу', 3),
  singular2ndPerson: Word('летишь', 3),
  singular3rdPerson: Word('летит', 3),
  plural1stPerson: Word('летим', 3),
  plural2ndPerson: Word('летите', 3),
  plural3rdPerson: Word('летят', 3),
  masculinePast: Word('летел', 3),
  femininePast: Word('летела', 3),
  neuterPast: Word('летело', 3),
  pluralPast: Word('летели', 3),
  imperativeInformal: Word('лети', 3),
  imperativeFormal: Word('летите', 3),
  imperfect: ['полететь'],
};

perfectVerbs.set(лететь.name.text, лететь);

export { лететь };