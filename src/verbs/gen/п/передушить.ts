import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передушить: PerfectVerb = {
  name: Word('передушить', 7),
  singular1stPerson: Word('передушу', 7),
  singular2ndPerson: Word('передушишь', 5),
  singular3rdPerson: Word('передушит', 5),
  plural1stPerson: Word('передушим', 5),
  plural2ndPerson: Word('передушите', 5),
  plural3rdPerson: Word('передушат', 5),
  masculinePast: Word('передушил', 7),
  femininePast: Word('передушила', 7),
  neuterPast: Word('передушило', 7),
  pluralPast: Word('передушили', 7),
  imperativeInformal: Word('передуши', 7),
  imperativeFormal: Word('передушите', 7),
  imperfect: [],
};

perfectVerbs.set(передушить.name.text, передушить);

export { передушить };