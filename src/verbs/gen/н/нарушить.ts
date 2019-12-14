import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарушить: PerfectVerb = {
  name: Word('нарушить', 3),
  singular1stPerson: Word('нарушу', 3),
  singular2ndPerson: Word('нарушишь', 3),
  singular3rdPerson: Word('нарушит', 3),
  plural1stPerson: Word('нарушим', 3),
  plural2ndPerson: Word('нарушите', 3),
  plural3rdPerson: Word('нарушат', 3),
  masculinePast: Word('нарушил', 3),
  femininePast: Word('нарушила', 3),
  neuterPast: Word('нарушило', 3),
  pluralPast: Word('нарушили', 3),
  imperativeInformal: Word('нарушь', 3),
  imperativeFormal: Word('нарушьте', 3),
  imperfect: ['нарушать'],
};

perfectVerbs.set(нарушить.name.text, нарушить);

export { нарушить };