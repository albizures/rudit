import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const двоить: PerfectVerb = {
  name: Word('двоить', 3),
  singular1stPerson: Word('двою', 3),
  singular2ndPerson: Word('двоишь', 3),
  singular3rdPerson: Word('двоит', 3),
  plural1stPerson: Word('двоим', 3),
  plural2ndPerson: Word('двоите', 3),
  plural3rdPerson: Word('двоят', 3),
  masculinePast: Word('двоил', 3),
  femininePast: Word('двоила', 3),
  neuterPast: Word('двоило', 3),
  pluralPast: Word('двоили', 3),
  imperativeInformal: Word('двои', 3),
  imperativeFormal: Word('двоите', 3),
  imperfect: [],
};

perfectVerbs.set(двоить.name.text, двоить);

export { двоить };