import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const травить: PerfectVerb = {
  name: Word('травить', 4),
  singular1stPerson: Word('травлю', 5),
  singular2ndPerson: Word('травишь', 2),
  singular3rdPerson: Word('травит', 2),
  plural1stPerson: Word('травим', 2),
  plural2ndPerson: Word('травите', 2),
  plural3rdPerson: Word('травят', 2),
  masculinePast: Word('травил', 4),
  femininePast: Word('травила', 4),
  neuterPast: Word('травило', 4),
  pluralPast: Word('травили', 4),
  imperativeInformal: Word('трави', 4),
  imperativeFormal: Word('травите', 4),
  imperfect: [],
};

perfectVerbs.set(травить.name.text, травить);

export { травить };