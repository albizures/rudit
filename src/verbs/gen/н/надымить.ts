import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надымить: PerfectVerb = {
  name: Word('надымить', 5),
  singular1stPerson: Word('надымлю', 6),
  singular2ndPerson: Word('надымишь', 5),
  singular3rdPerson: Word('надымит', 5),
  plural1stPerson: Word('надымим', 5),
  plural2ndPerson: Word('надымите', 5),
  plural3rdPerson: Word('надымят', 5),
  masculinePast: Word('надымил', 5),
  femininePast: Word('надымила', 5),
  neuterPast: Word('надымило', 5),
  pluralPast: Word('надымили', 5),
  imperativeInformal: Word('надыми', 5),
  imperativeFormal: Word('надымите', 5),
  imperfect: [],
};

perfectVerbs.set(надымить.name.text, надымить);

export { надымить };