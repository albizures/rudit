import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скрутить: PerfectVerb = {
  name: Word('скрутить', 5),
  singular1stPerson: Word('скручу', 5),
  singular2ndPerson: Word('скрутишь', 3),
  singular3rdPerson: Word('скрутит', 3),
  plural1stPerson: Word('скрутим', 3),
  plural2ndPerson: Word('скрутите', 3),
  plural3rdPerson: Word('скрутят', 3),
  masculinePast: Word('скрутил', 5),
  femininePast: Word('скрутила', 5),
  neuterPast: Word('скрутило', 5),
  pluralPast: Word('скрутили', 5),
  imperativeInformal: Word('скрути', 5),
  imperativeFormal: Word('скрутите', 5),
  imperfect: [],
};

perfectVerbs.set(скрутить.name.text, скрутить);

export { скрутить };