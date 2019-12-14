import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насечь: PerfectVerb = {
  name: Word('насечь', 3),
  singular1stPerson: Word('насеку', 5),
  singular2ndPerson: Word('насечёшь', 5),
  singular3rdPerson: Word('насечёт', 5),
  plural1stPerson: Word('насечём', 5),
  plural2ndPerson: Word('насечёте', 5),
  plural3rdPerson: Word('насекут', 5),
  masculinePast: Word('насёк', 3),
  femininePast: Word('насекла', 6),
  neuterPast: Word('насекло', 6),
  pluralPast: Word('насекли', 6),
  imperativeInformal: Word('насеки', 5),
  imperativeFormal: Word('насеките', 5),
  imperfect: [],
};

perfectVerbs.set(насечь.name.text, насечь);

export { насечь };