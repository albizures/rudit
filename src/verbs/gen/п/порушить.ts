import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порушить: PerfectVerb = {
  name: Word('порушить', 3),
  singular1stPerson: Word('порушу', 3),
  singular2ndPerson: Word('порушишь', 3),
  singular3rdPerson: Word('порушит', 3),
  plural1stPerson: Word('порушим', 3),
  plural2ndPerson: Word('порушите', 3),
  plural3rdPerson: Word('порушат', 3),
  masculinePast: Word('порушил', 3),
  femininePast: Word('порушила', 3),
  neuterPast: Word('порушило', 3),
  pluralPast: Word('порушили', 3),
  imperativeInformal: Word('порушь', 3),
  imperativeFormal: Word('порушьте', 3),
  imperfect: [],
};

perfectVerbs.set(порушить.name.text, порушить);

export { порушить };