import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пушить: PerfectVerb = {
  name: Word('пушить', 3),
  singular1stPerson: Word('пушу', 3),
  singular2ndPerson: Word('пушишь', 3),
  singular3rdPerson: Word('пушит', 3),
  plural1stPerson: Word('пушим', 3),
  plural2ndPerson: Word('пушите', 3),
  plural3rdPerson: Word('пушат', 3),
  masculinePast: Word('пушил', 3),
  femininePast: Word('пушила', 3),
  neuterPast: Word('пушило', 3),
  pluralPast: Word('пушили', 3),
  imperativeInformal: Word('пуши', 3),
  imperativeFormal: Word('пушите', 3),
  imperfect: [],
};

perfectVerbs.set(пушить.name.text, пушить);

export { пушить };