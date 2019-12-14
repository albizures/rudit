import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предопределить: PerfectVerb = {
  name: Word('предопределить', 11),
  singular1stPerson: Word('предопределю', 11),
  singular2ndPerson: Word('предопределишь', 11),
  singular3rdPerson: Word('предопределит', 11),
  plural1stPerson: Word('предопределим', 11),
  plural2ndPerson: Word('предопределите', 11),
  plural3rdPerson: Word('предопределят', 11),
  masculinePast: Word('предопределил', 11),
  femininePast: Word('предопределила', 11),
  neuterPast: Word('предопределило', 11),
  pluralPast: Word('предопределили', 11),
  imperativeInformal: Word('предопредели', 11),
  imperativeFormal: Word('предопределите', 11),
  imperfect: [],
};

perfectVerbs.set(предопределить.name.text, предопределить);

export { предопределить };