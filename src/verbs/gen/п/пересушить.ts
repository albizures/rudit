import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересушить: PerfectVerb = {
  name: Word('пересушить', 7),
  singular1stPerson: Word('пересушу', 7),
  singular2ndPerson: Word('пересушишь', 5),
  singular3rdPerson: Word('пересушит', 5),
  plural1stPerson: Word('пересушим', 5),
  plural2ndPerson: Word('пересушите', 5),
  plural3rdPerson: Word('пересушат', 5),
  masculinePast: Word('пересушил', 7),
  femininePast: Word('пересушила', 7),
  neuterPast: Word('пересушило', 7),
  pluralPast: Word('пересушили', 7),
  imperativeInformal: Word('пересуши', 7),
  imperativeFormal: Word('пересушите', 7),
  imperfect: [],
};

perfectVerbs.set(пересушить.name.text, пересушить);

export { пересушить };