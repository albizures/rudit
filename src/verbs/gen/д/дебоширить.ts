import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дебоширить: PerfectVerb = {
  name: Word('дебоширить', 5),
  singular1stPerson: Word('дебоширю', 5),
  singular2ndPerson: Word('дебоширишь', 5),
  singular3rdPerson: Word('дебоширит', 5),
  plural1stPerson: Word('дебоширим', 5),
  plural2ndPerson: Word('дебоширите', 5),
  plural3rdPerson: Word('дебоширят', 5),
  masculinePast: Word('дебоширил', 5),
  femininePast: Word('дебоширила', 5),
  neuterPast: Word('дебоширило', 5),
  pluralPast: Word('дебоширили', 5),
  imperativeInformal: Word('дебоширь', 5),
  imperativeFormal: Word('дебоширьте', 5),
  imperfect: [],
};

perfectVerbs.set(дебоширить.name.text, дебоширить);

export { дебоширить };