import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скормить: PerfectVerb = {
  name: Word('скормить', 5),
  singular1stPerson: Word('скормлю', 6),
  singular2ndPerson: Word('скормишь', 2),
  singular3rdPerson: Word('скормит', 2),
  plural1stPerson: Word('скормим', 2),
  plural2ndPerson: Word('скормите', 2),
  plural3rdPerson: Word('скормят', 2),
  masculinePast: Word('скормил', 5),
  femininePast: Word('скормила', 5),
  neuterPast: Word('скормило', 5),
  pluralPast: Word('скормили', 5),
  imperativeInformal: Word('скорми', 5),
  imperativeFormal: Word('скормите', 5),
  imperfect: [],
};

perfectVerbs.set(скормить.name.text, скормить);

export { скормить };