import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикрутить: PerfectVerb = {
  name: Word('прикрутить', 7),
  singular1stPerson: Word('прикручу', 7),
  singular2ndPerson: Word('прикрутишь', 5),
  singular3rdPerson: Word('прикрутит', 5),
  plural1stPerson: Word('прикрутим', 5),
  plural2ndPerson: Word('прикрутите', 5),
  plural3rdPerson: Word('прикрутят', 5),
  masculinePast: Word('прикрутил', 7),
  femininePast: Word('прикрутила', 7),
  neuterPast: Word('прикрутило', 7),
  pluralPast: Word('прикрутили', 7),
  imperativeInformal: Word('прикрути', 7),
  imperativeFormal: Word('прикрутите', 7),
  imperfect: [],
};

perfectVerbs.set(прикрутить.name.text, прикрутить);

export { прикрутить };