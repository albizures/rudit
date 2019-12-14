import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const долететь: PerfectVerb = {
  name: Word('долететь', 5),
  singular1stPerson: Word('долечу', 5),
  singular2ndPerson: Word('долетишь', 5),
  singular3rdPerson: Word('долетит', 5),
  plural1stPerson: Word('долетим', 5),
  plural2ndPerson: Word('долетите', 5),
  plural3rdPerson: Word('долетят', 5),
  masculinePast: Word('долетел', 5),
  femininePast: Word('долетела', 5),
  neuterPast: Word('долетело', 5),
  pluralPast: Word('долетели', 5),
  imperativeInformal: Word('долети', 5),
  imperativeFormal: Word('долетите', 5),
  imperfect: [],
};

perfectVerbs.set(долететь.name.text, долететь);

export { долететь };