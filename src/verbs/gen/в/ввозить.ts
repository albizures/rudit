import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ввозить: PerfectVerb = {
  name: Word('ввозить', 4),
  singular1stPerson: Word('ввожу', 4),
  singular2ndPerson: Word('ввозишь', 2),
  singular3rdPerson: Word('ввозит', 2),
  plural1stPerson: Word('ввозим', 2),
  plural2ndPerson: Word('ввозите', 2),
  plural3rdPerson: Word('ввозят', 2),
  masculinePast: Word('ввозил', 4),
  femininePast: Word('ввозила', 4),
  neuterPast: Word('ввозило', 4),
  pluralPast: Word('ввозили', 4),
  imperativeInformal: Word('ввози', 4),
  imperativeFormal: Word('ввозите', 4),
  imperfect: [],
};

perfectVerbs.set(ввозить.name.text, ввозить);

export { ввозить };