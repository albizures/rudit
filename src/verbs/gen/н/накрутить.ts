import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накрутить: PerfectVerb = {
  name: Word('накрутить', 6),
  singular1stPerson: Word('накручу', 6),
  singular2ndPerson: Word('накрутишь', 4),
  singular3rdPerson: Word('накрутит', 4),
  plural1stPerson: Word('накрутим', 4),
  plural2ndPerson: Word('накрутите', 4),
  plural3rdPerson: Word('накрутят', 4),
  masculinePast: Word('накрутил', 6),
  femininePast: Word('накрутила', 6),
  neuterPast: Word('накрутило', 6),
  pluralPast: Word('накрутили', 6),
  imperativeInformal: Word('накрути', 6),
  imperativeFormal: Word('накрутите', 6),
  imperfect: [],
};

perfectVerbs.set(накрутить.name.text, накрутить);

export { накрутить };