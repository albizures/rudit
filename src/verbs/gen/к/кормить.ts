import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кормить: PerfectVerb = {
  name: Word('кормить', 4),
  singular1stPerson: Word('кормлю', 5),
  singular2ndPerson: Word('кормишь', 1),
  singular3rdPerson: Word('кормит', 1),
  plural1stPerson: Word('кормим', 1),
  plural2ndPerson: Word('кормите', 1),
  plural3rdPerson: Word('кормят', 1),
  masculinePast: Word('кормил', 4),
  femininePast: Word('кормила', 4),
  neuterPast: Word('кормило', 4),
  pluralPast: Word('кормили', 4),
  imperativeInformal: Word('корми', 4),
  imperativeFormal: Word('кормите', 4),
  imperfect: ['покормить','накормить','прокормить'],
};

perfectVerbs.set(кормить.name.text, кормить);

export { кормить };