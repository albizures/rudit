import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задушить: PerfectVerb = {
  name: Word('задушить', 5),
  singular1stPerson: Word('задушу', 5),
  singular2ndPerson: Word('задушишь', 3),
  singular3rdPerson: Word('задушит', 3),
  plural1stPerson: Word('задушим', 3),
  plural2ndPerson: Word('задушите', 3),
  plural3rdPerson: Word('задушат', 3),
  masculinePast: Word('задушил', 5),
  femininePast: Word('задушила', 5),
  neuterPast: Word('задушило', 5),
  pluralPast: Word('задушили', 5),
  imperativeInformal: Word('задуши', 5),
  imperativeFormal: Word('задушите', 5),
  imperfect: ['душить'],
};

perfectVerbs.set(задушить.name.text, задушить);

export { задушить };