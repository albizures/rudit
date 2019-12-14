import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крушить: PerfectVerb = {
  name: Word('крушить', 4),
  singular1stPerson: Word('крушу', 4),
  singular2ndPerson: Word('крушишь', 4),
  singular3rdPerson: Word('крушит', 4),
  plural1stPerson: Word('крушим', 4),
  plural2ndPerson: Word('крушите', 4),
  plural3rdPerson: Word('крушат', 4),
  masculinePast: Word('крушил', 4),
  femininePast: Word('крушила', 4),
  neuterPast: Word('крушило', 4),
  pluralPast: Word('крушили', 4),
  imperativeInformal: Word('круши', 4),
  imperativeFormal: Word('крушите', 4),
  imperfect: [],
};

perfectVerbs.set(крушить.name.text, крушить);

export { крушить };