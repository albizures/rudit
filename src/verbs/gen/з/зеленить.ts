import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зеленить: PerfectVerb = {
  name: Word('зеленить', 5),
  singular1stPerson: Word('зеленю', 5),
  singular2ndPerson: Word('зеленишь', 5),
  singular3rdPerson: Word('зеленит', 5),
  plural1stPerson: Word('зеленим', 5),
  plural2ndPerson: Word('зелените', 5),
  plural3rdPerson: Word('зеленят', 5),
  masculinePast: Word('зеленил', 5),
  femininePast: Word('зеленила', 5),
  neuterPast: Word('зеленило', 5),
  pluralPast: Word('зеленили', 5),
  imperativeInformal: Word('зелени', 5),
  imperativeFormal: Word('зелените', 5),
  imperfect: [],
};

perfectVerbs.set(зеленить.name.text, зеленить);

export { зеленить };