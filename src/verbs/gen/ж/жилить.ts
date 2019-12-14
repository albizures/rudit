import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жилить: PerfectVerb = {
  name: Word('жилить', 1),
  singular1stPerson: Word('жилю', 1),
  singular2ndPerson: Word('жилишь', 1),
  singular3rdPerson: Word('жилит', 1),
  plural1stPerson: Word('жилим', 1),
  plural2ndPerson: Word('жилите', 1),
  plural3rdPerson: Word('жилят', 1),
  masculinePast: Word('жилил', 1),
  femininePast: Word('жилила', 1),
  neuterPast: Word('жилило', 1),
  pluralPast: Word('жилили', 1),
  imperativeInformal: Word('жиль', 1),
  imperativeFormal: Word('жильте', 1),
  imperfect: [],
};

perfectVerbs.set(жилить.name.text, жилить);

export { жилить };