import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ценить: PerfectVerb = {
  name: Word('ценить', 3),
  singular1stPerson: Word('ценю', 3),
  singular2ndPerson: Word('ценишь', 1),
  singular3rdPerson: Word('ценит', 1),
  plural1stPerson: Word('ценим', 1),
  plural2ndPerson: Word('цените', 1),
  plural3rdPerson: Word('ценят', 1),
  masculinePast: Word('ценил', 3),
  femininePast: Word('ценила', 3),
  neuterPast: Word('ценило', 3),
  pluralPast: Word('ценили', 3),
  imperativeInformal: Word('цени', 3),
  imperativeFormal: Word('цените', 3),
  imperfect: ['оценить'],
};

perfectVerbs.set(ценить.name.text, ценить);

export { ценить };