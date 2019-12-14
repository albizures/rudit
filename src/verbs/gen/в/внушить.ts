import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const внушить: PerfectVerb = {
  name: Word('внушить', 4),
  singular1stPerson: Word('внушу', 4),
  singular2ndPerson: Word('внушишь', 4),
  singular3rdPerson: Word('внушит', 4),
  plural1stPerson: Word('внушим', 4),
  plural2ndPerson: Word('внушите', 4),
  plural3rdPerson: Word('внушат', 4),
  masculinePast: Word('внушил', 4),
  femininePast: Word('внушила', 4),
  neuterPast: Word('внушило', 4),
  pluralPast: Word('внушили', 4),
  imperativeInformal: Word('внуши', 4),
  imperativeFormal: Word('внушите', 4),
  imperfect: [],
};

perfectVerbs.set(внушить.name.text, внушить);

export { внушить };