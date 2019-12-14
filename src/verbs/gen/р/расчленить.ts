import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расчленить: PerfectVerb = {
  name: Word('расчленить', 7),
  singular1stPerson: Word('расчленю', 7),
  singular2ndPerson: Word('расчленишь', 7),
  singular3rdPerson: Word('расчленит', 7),
  plural1stPerson: Word('расчленим', 7),
  plural2ndPerson: Word('расчлените', 7),
  plural3rdPerson: Word('расчленят', 7),
  masculinePast: Word('расчленил', 7),
  femininePast: Word('расчленила', 7),
  neuterPast: Word('расчленило', 7),
  pluralPast: Word('расчленили', 7),
  imperativeInformal: Word('расчлени', 7),
  imperativeFormal: Word('расчлените', 7),
  imperfect: [],
};

perfectVerbs.set(расчленить.name.text, расчленить);

export { расчленить };