import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попилить: PerfectVerb = {
  name: Word('попилить', 5),
  singular1stPerson: Word('попилю', 5),
  singular2ndPerson: Word('попилишь', 3),
  singular3rdPerson: Word('попилит', 3),
  plural1stPerson: Word('попилим', 3),
  plural2ndPerson: Word('попилите', 3),
  plural3rdPerson: Word('попилят', 3),
  masculinePast: Word('попилил', 5),
  femininePast: Word('попилила', 5),
  neuterPast: Word('попилило', 5),
  pluralPast: Word('попилили', 5),
  imperativeInformal: Word('попили', 5),
  imperativeFormal: Word('попилите', 5),
  imperfect: [],
};

perfectVerbs.set(попилить.name.text, попилить);

export { попилить };