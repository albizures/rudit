import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const таить: PerfectVerb = {
  name: Word('таить', 2),
  singular1stPerson: Word('таю', 2),
  singular2ndPerson: Word('таишь', 2),
  singular3rdPerson: Word('таит', 2),
  plural1stPerson: Word('таим', 2),
  plural2ndPerson: Word('таите', 2),
  plural3rdPerson: Word('таят', 2),
  masculinePast: Word('таил', 2),
  femininePast: Word('таила', 2),
  neuterPast: Word('таило', 2),
  pluralPast: Word('таили', 2),
  imperativeInformal: Word('таи', 2),
  imperativeFormal: Word('таите', 2),
  imperfect: [],
};

perfectVerbs.set(таить.name.text, таить);

export { таить };