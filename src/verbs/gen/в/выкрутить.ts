import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкрутить: PerfectVerb = {
  name: Word('выкрутить', 1),
  singular1stPerson: Word('выкручу', 1),
  singular2ndPerson: Word('выкрутишь', 1),
  singular3rdPerson: Word('выкрутит', 1),
  plural1stPerson: Word('выкрутим', 1),
  plural2ndPerson: Word('выкрутите', 1),
  plural3rdPerson: Word('выкрутят', 1),
  masculinePast: Word('выкрутил', 1),
  femininePast: Word('выкрутила', 1),
  neuterPast: Word('выкрутило', 1),
  pluralPast: Word('выкрутили', 1),
  imperativeInformal: Word('выкрути', 1),
  imperativeFormal: Word('выкрутите', 1),
  imperfect: [],
};

perfectVerbs.set(выкрутить.name.text, выкрутить);

export { выкрутить };