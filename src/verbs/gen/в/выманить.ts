import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выманить: PerfectVerb = {
  name: Word('выманить', 1),
  singular1stPerson: Word('выманю', 1),
  singular2ndPerson: Word('выманишь', 1),
  singular3rdPerson: Word('выманит', 1),
  plural1stPerson: Word('выманим', 1),
  plural2ndPerson: Word('выманите', 1),
  plural3rdPerson: Word('выманят', 1),
  masculinePast: Word('выманил', 1),
  femininePast: Word('выманила', 1),
  neuterPast: Word('выманило', 1),
  pluralPast: Word('выманили', 1),
  imperativeInformal: Word('вымани', 1),
  imperativeFormal: Word('выманите', 1),
  imperfect: [],
};

perfectVerbs.set(выманить.name.text, выманить);

export { выманить };