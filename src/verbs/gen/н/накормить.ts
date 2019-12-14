import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накормить: PerfectVerb = {
  name: Word('накормить', 6),
  singular1stPerson: Word('накормлю', 7),
  singular2ndPerson: Word('накормишь', 3),
  singular3rdPerson: Word('накормит', 3),
  plural1stPerson: Word('накормим', 3),
  plural2ndPerson: Word('накормите', 3),
  plural3rdPerson: Word('накормят', 3),
  masculinePast: Word('накормил', 6),
  femininePast: Word('накормила', 6),
  neuterPast: Word('накормило', 6),
  pluralPast: Word('накормили', 6),
  imperativeInformal: Word('накорми', 6),
  imperativeFormal: Word('накормите', 6),
  imperfect: [],
};

perfectVerbs.set(накормить.name.text, накормить);

export { накормить };