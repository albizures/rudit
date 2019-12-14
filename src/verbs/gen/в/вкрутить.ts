import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вкрутить: PerfectVerb = {
  name: Word('вкрутить', 5),
  singular1stPerson: Word('вкручу', 5),
  singular2ndPerson: Word('вкрутишь', 3),
  singular3rdPerson: Word('вкрутит', 3),
  plural1stPerson: Word('вкрутим', 3),
  plural2ndPerson: Word('вкрутите', 3),
  plural3rdPerson: Word('вкрутят', 3),
  masculinePast: Word('вкрутил', 5),
  femininePast: Word('вкрутила', 5),
  neuterPast: Word('вкрутило', 5),
  pluralPast: Word('вкрутили', 5),
  imperativeInformal: Word('вкрути', 5),
  imperativeFormal: Word('вкрутите', 5),
  imperfect: [],
};

perfectVerbs.set(вкрутить.name.text, вкрутить);

export { вкрутить };