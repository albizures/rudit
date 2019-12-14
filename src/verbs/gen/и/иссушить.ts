import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const иссушить: PerfectVerb = {
  name: Word('иссушить', 5),
  singular1stPerson: Word('иссушу', 5),
  singular2ndPerson: Word('иссушишь', 5),
  singular3rdPerson: Word('иссушит', 5),
  plural1stPerson: Word('иссушим', 5),
  plural2ndPerson: Word('иссушите', 5),
  plural3rdPerson: Word('иссушат', 5),
  masculinePast: Word('иссушил', 5),
  femininePast: Word('иссушила', 5),
  neuterPast: Word('иссушило', 5),
  pluralPast: Word('иссушили', 5),
  imperativeInformal: Word('иссуши', 5),
  imperativeFormal: Word('иссушите', 5),
  imperfect: ['иссушать'],
};

perfectVerbs.set(иссушить.name.text, иссушить);

export { иссушить };