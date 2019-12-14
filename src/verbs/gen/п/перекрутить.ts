import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекрутить: PerfectVerb = {
  name: Word('перекрутить', 8),
  singular1stPerson: Word('перекручу', 8),
  singular2ndPerson: Word('перекрутишь', 6),
  singular3rdPerson: Word('перекрутит', 6),
  plural1stPerson: Word('перекрутим', 6),
  plural2ndPerson: Word('перекрутите', 6),
  plural3rdPerson: Word('перекрутят', 6),
  masculinePast: Word('перекрутил', 8),
  femininePast: Word('перекрутила', 8),
  neuterPast: Word('перекрутило', 8),
  pluralPast: Word('перекрутили', 8),
  imperativeInformal: Word('перекрути', 8),
  imperativeFormal: Word('перекрутите', 8),
  imperfect: [],
};

perfectVerbs.set(перекрутить.name.text, перекрутить);

export { перекрутить };