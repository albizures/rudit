import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высушить: PerfectVerb = {
  name: Word('высушить', 1),
  singular1stPerson: Word('высушу', 1),
  singular2ndPerson: Word('высушишь', 1),
  singular3rdPerson: Word('высушит', 1),
  plural1stPerson: Word('высушим', 1),
  plural2ndPerson: Word('высушите', 1),
  plural3rdPerson: Word('высушат', 1),
  masculinePast: Word('высушил', 1),
  femininePast: Word('высушила', 1),
  neuterPast: Word('высушило', 1),
  pluralPast: Word('высушили', 1),
  imperativeInformal: Word('высуши', 1),
  imperativeFormal: Word('высушите', 1),
  imperfect: [],
};

perfectVerbs.set(высушить.name.text, высушить);

export { высушить };