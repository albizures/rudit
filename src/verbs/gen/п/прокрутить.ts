import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокрутить: PerfectVerb = {
  name: Word('прокрутить', 7),
  singular1stPerson: Word('прокручу', 7),
  singular2ndPerson: Word('прокрутишь', 5),
  singular3rdPerson: Word('прокрутит', 5),
  plural1stPerson: Word('прокрутим', 5),
  plural2ndPerson: Word('прокрутите', 5),
  plural3rdPerson: Word('прокрутят', 5),
  masculinePast: Word('прокрутил', 7),
  femininePast: Word('прокрутила', 7),
  neuterPast: Word('прокрутило', 7),
  pluralPast: Word('прокрутили', 7),
  imperativeInformal: Word('прокрути', 7),
  imperativeFormal: Word('прокрутите', 7),
  imperfect: [],
};

perfectVerbs.set(прокрутить.name.text, прокрутить);

export { прокрутить };