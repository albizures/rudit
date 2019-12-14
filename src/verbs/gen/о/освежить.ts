import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const освежить: PerfectVerb = {
  name: Word('освежить', 5),
  singular1stPerson: Word('освежу', 5),
  singular2ndPerson: Word('освежишь', 5),
  singular3rdPerson: Word('освежит', 5),
  plural1stPerson: Word('освежим', 5),
  plural2ndPerson: Word('освежите', 5),
  plural3rdPerson: Word('освежат', 5),
  masculinePast: Word('освежил', 5),
  femininePast: Word('освежила', 5),
  neuterPast: Word('освежило', 5),
  pluralPast: Word('освежили', 5),
  imperativeInformal: Word('освежи', 5),
  imperativeFormal: Word('освежите', 5),
  imperfect: [],
};

perfectVerbs.set(освежить.name.text, освежить);

export { освежить };