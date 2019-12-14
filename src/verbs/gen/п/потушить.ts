import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потушить: PerfectVerb = {
  name: Word('потушить', 5),
  singular1stPerson: Word('потушу', 5),
  singular2ndPerson: Word('потушишь', 3),
  singular3rdPerson: Word('потушит', 3),
  plural1stPerson: Word('потушим', 3),
  plural2ndPerson: Word('потушите', 3),
  plural3rdPerson: Word('потушат', 3),
  masculinePast: Word('потушил', 5),
  femininePast: Word('потушила', 5),
  neuterPast: Word('потушило', 5),
  pluralPast: Word('потушили', 5),
  imperativeInformal: Word('потуши', 5),
  imperativeFormal: Word('потушите', 5),
  imperfect: [],
};

perfectVerbs.set(потушить.name.text, потушить);

export { потушить };