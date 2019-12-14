import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересилить: PerfectVerb = {
  name: Word('пересилить', 5),
  singular1stPerson: Word('пересилю', 5),
  singular2ndPerson: Word('пересилишь', 5),
  singular3rdPerson: Word('пересилит', 5),
  plural1stPerson: Word('пересилим', 5),
  plural2ndPerson: Word('пересилите', 5),
  plural3rdPerson: Word('пересилят', 5),
  masculinePast: Word('пересилил', 5),
  femininePast: Word('пересилила', 5),
  neuterPast: Word('пересилило', 5),
  pluralPast: Word('пересилили', 5),
  imperativeInformal: Word('пересиль', 5),
  imperativeFormal: Word('пересильте', 5),
  imperfect: [],
};

perfectVerbs.set(пересилить.name.text, пересилить);

export { пересилить };