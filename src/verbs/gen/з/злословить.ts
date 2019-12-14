import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const злословить: PerfectVerb = {
  name: Word('злословить', 5),
  singular1stPerson: Word('злословлю', 5),
  singular2ndPerson: Word('злословишь', 5),
  singular3rdPerson: Word('злословит', 5),
  plural1stPerson: Word('злословим', 5),
  plural2ndPerson: Word('злословите', 5),
  plural3rdPerson: Word('злословят', 5),
  masculinePast: Word('злословил', 5),
  femininePast: Word('злословила', 5),
  neuterPast: Word('злословило', 5),
  pluralPast: Word('злословили', 5),
  imperativeInformal: Word('злословь', 5),
  imperativeFormal: Word('злословьте', 5),
  imperfect: [],
};

perfectVerbs.set(злословить.name.text, злословить);

export { злословить };