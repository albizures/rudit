import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зазеленить: PerfectVerb = {
  name: Word('зазеленить', 7),
  singular1stPerson: Word('зазеленю', 7),
  singular2ndPerson: Word('зазеленишь', 7),
  singular3rdPerson: Word('зазеленит', 7),
  plural1stPerson: Word('зазеленим', 7),
  plural2ndPerson: Word('зазелените', 7),
  plural3rdPerson: Word('зазеленят', 7),
  masculinePast: Word('зазеленил', 7),
  femininePast: Word('зазеленила', 7),
  neuterPast: Word('зазеленило', 7),
  pluralPast: Word('зазеленили', 7),
  imperativeInformal: Word('зазелени', 7),
  imperativeFormal: Word('зазелените', 7),
  imperfect: [],
};

perfectVerbs.set(зазеленить.name.text, зазеленить);

export { зазеленить };