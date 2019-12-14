import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const применить: PerfectVerb = {
  name: Word('применить', 6),
  singular1stPerson: Word('применю', 6),
  singular2ndPerson: Word('применишь', 4),
  singular3rdPerson: Word('применит', 4),
  plural1stPerson: Word('применим', 4),
  plural2ndPerson: Word('примените', 4),
  plural3rdPerson: Word('применят', 4),
  masculinePast: Word('применил', 6),
  femininePast: Word('применила', 6),
  neuterPast: Word('применило', 6),
  pluralPast: Word('применили', 6),
  imperativeInformal: Word('примени', 6),
  imperativeFormal: Word('примените', 6),
  imperfect: ['применять'],
};

perfectVerbs.set(применить.name.text, применить);

export { применить };