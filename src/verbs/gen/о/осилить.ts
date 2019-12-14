import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осилить: PerfectVerb = {
  name: Word('осилить', 2),
  singular1stPerson: Word('осилю', 2),
  singular2ndPerson: Word('осилишь', 2),
  singular3rdPerson: Word('осилит', 2),
  plural1stPerson: Word('осилим', 2),
  plural2ndPerson: Word('осилите', 2),
  plural3rdPerson: Word('осилят', 2),
  masculinePast: Word('осилил', 2),
  femininePast: Word('осилила', 2),
  neuterPast: Word('осилило', 2),
  pluralPast: Word('осилили', 2),
  imperativeInformal: Word('осиль', 2),
  imperativeFormal: Word('осильте', 2),
  imperfect: [],
};

perfectVerbs.set(осилить.name.text, осилить);

export { осилить };