import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдвоить: PerfectVerb = {
  name: Word('сдвоить', 4),
  singular1stPerson: Word('сдвою', 4),
  singular2ndPerson: Word('сдвоишь', 4),
  singular3rdPerson: Word('сдвоит', 4),
  plural1stPerson: Word('сдвоим', 4),
  plural2ndPerson: Word('сдвоите', 4),
  plural3rdPerson: Word('сдвоят', 4),
  masculinePast: Word('сдвоил', 4),
  femininePast: Word('сдвоила', 4),
  neuterPast: Word('сдвоило', 4),
  pluralPast: Word('сдвоили', 4),
  imperativeInformal: Word('сдвои', 4),
  imperativeFormal: Word('сдвоите', 4),
  imperfect: [],
};

perfectVerbs.set(сдвоить.name.text, сдвоить);

export { сдвоить };