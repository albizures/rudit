import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полететь: PerfectVerb = {
  name: Word('полететь', 5),
  singular1stPerson: Word('полечу', 5),
  singular2ndPerson: Word('полетишь', 5),
  singular3rdPerson: Word('полетит', 5),
  plural1stPerson: Word('полетим', 5),
  plural2ndPerson: Word('полетите', 5),
  plural3rdPerson: Word('полетят', 5),
  masculinePast: Word('полетел', 5),
  femininePast: Word('полетела', 5),
  neuterPast: Word('полетело', 5),
  pluralPast: Word('полетели', 5),
  imperativeInformal: Word('полети', 5),
  imperativeFormal: Word('полетите', 5),
  imperfect: ['лететь'],
};

perfectVerbs.set(полететь.name.text, полететь);

export { полететь };