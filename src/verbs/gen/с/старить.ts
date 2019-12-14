import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const старить: PerfectVerb = {
  name: Word('старить', 2),
  singular1stPerson: Word('старю', 2),
  singular2ndPerson: Word('старишь', 2),
  singular3rdPerson: Word('старит', 2),
  plural1stPerson: Word('старим', 2),
  plural2ndPerson: Word('старите', 2),
  plural3rdPerson: Word('старят', 2),
  masculinePast: Word('старил', 2),
  femininePast: Word('старила', 2),
  neuterPast: Word('старило', 2),
  pluralPast: Word('старили', 2),
  imperativeInformal: Word('старь', 2),
  imperativeFormal: Word('старьте', 2),
  imperfect: ['состарить'],
};

perfectVerbs.set(старить.name.text, старить);

export { старить };