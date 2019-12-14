import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пришпилить: PerfectVerb = {
  name: Word('пришпилить', 5),
  singular1stPerson: Word('пришпилю', 5),
  singular2ndPerson: Word('пришпилишь', 5),
  singular3rdPerson: Word('пришпилит', 5),
  plural1stPerson: Word('пришпилим', 5),
  plural2ndPerson: Word('пришпилите', 5),
  plural3rdPerson: Word('пришпилят', 5),
  masculinePast: Word('пришпилил', 5),
  femininePast: Word('пришпилила', 5),
  neuterPast: Word('пришпилило', 5),
  pluralPast: Word('пришпилили', 5),
  imperativeInformal: Word('пришпиль', 5),
  imperativeFormal: Word('пришпильте', 5),
  imperfect: [],
};

perfectVerbs.set(пришпилить.name.text, пришпилить);

export { пришпилить };