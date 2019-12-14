import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекипятить: PerfectVerb = {
  name: Word('перекипятить', 9),
  singular1stPerson: Word('перекипячу', 9),
  singular2ndPerson: Word('перекипятишь', 9),
  singular3rdPerson: Word('перекипятит', 9),
  plural1stPerson: Word('перекипятим', 9),
  plural2ndPerson: Word('перекипятите', 9),
  plural3rdPerson: Word('перекипятят', 9),
  masculinePast: Word('перекипятил', 9),
  femininePast: Word('перекипятила', 9),
  neuterPast: Word('перекипятило', 9),
  pluralPast: Word('перекипятили', 9),
  imperativeInformal: Word('перекипяти', 9),
  imperativeFormal: Word('перекипятите', 9),
  imperfect: [],
};

perfectVerbs.set(перекипятить.name.text, перекипятить);

export { перекипятить };